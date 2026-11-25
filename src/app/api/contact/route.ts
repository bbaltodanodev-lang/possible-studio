import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";
import { readContactRequest, ContactRequestError } from "@/lib/contact-request";
import { checkContactRateLimit, getClientKey } from "@/lib/rate-limit";

// Registro mínimo de eventos de seguridad: sin datos del formulario ni IP completa.
function logEvent(level: "warn" | "error", event: string, detail: Record<string, unknown> = {}) {
  console[level](JSON.stringify({ scope: "api/contact", event, at: new Date().toISOString(), ...detail }));
}

function maskKey(key: string) {
  return key === "unknown" ? key : key.replace(/[.:][^.:]*$/, ".x");
}

export async function POST(request: Request) {
  const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" };
  try {
    // El límite se aplica antes de leer el cuerpo: también cuenta los intentos inválidos.
    const clientKey = getClientKey(request);
    const limit = checkContactRateLimit(clientKey);
    if (!limit.allowed) {
      logEvent("warn", "rate_limited", { client: maskKey(clientKey) });
      return NextResponse.json(
        { ok: false, error: "Demasiadas solicitudes. Intenta más tarde." },
        { status: 429, headers: { ...headers, "Retry-After": String(limit.retryAfter) } },
      );
    }
    const payload = await readContactRequest(request);
    const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({ ...payload, _subject: `Nueva solicitud de ${payload.name}`, _template: "table", _captcha: "false" }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result || (result.success !== true && result.success !== "true")) {
      logEvent("error", "upstream_failed", { status: response.status });
      return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 502, headers });
    }
    return NextResponse.json({ ok: true }, { headers });
  } catch (error) {
    if (error instanceof ContactRequestError) {
      if (error.status === 403 || error.status === 413) logEvent("warn", "rejected", { status: error.status });
      return NextResponse.json({ ok: false, error: error.message }, { status: error.status, headers });
    }
    logEvent("error", "unexpected", { name: error instanceof Error ? error.name : typeof error });
    return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 502, headers });
  }
}
