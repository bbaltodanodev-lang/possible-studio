"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";
import styles from "./SystemsPricing.module.css";

export interface PlanTier {
  name: string;
  price: string;
  note: string;
  delivery: string;
  description: string;
  features: readonly { icon: IconName; label: string }[];
}

export interface PlanTierLabels {
  deliveryLabel: string;
  mostPopular: string;
  customBadge: string;
  customTagline: string;
  ctaInteresa: string;
  ctaPersonalizado: string;
}

/**
 * Los tres planes de un servicio con la misma estructura que Sistemas empresariales:
 * el primero sobrio, el segundo "Más solicitado" y el tercero a la medida con borde animado.
 */
export function PlanTiers({ id, tiers, labels }: { id: string; tiers: readonly PlanTier[]; labels: PlanTierLabels }) {
  return (
    <div className="mt-16 grid gap-6 lg:grid-cols-3">
      {tiers.map((tier, index) => {
        const highlight = index === 1;
        const custom = index === tiers.length - 1 && tiers.length > 2;
        return (
          <article
            key={tier.name}
            aria-labelledby={`${id}-plan-${index}`}
            className={cn(
              "relative isolate flex min-w-0 flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 motion-safe:hover:-translate-y-1",
              custom
                ? styles.customCard
                : highlight
                  ? "border-brand-400/50 bg-brand-tint shadow-[0_0_60px_rgba(138,0,255,0.15)]"
                  : "border-white/10 bg-card",
            )}
          >
            {highlight && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />}

            <div className="relative z-[1]">
              <div className="mb-5 flex min-h-7 items-center">
                {custom ? (
                  <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide", styles.customBadge)}>
                    <DynamicIcon name="zap" className="size-3.5 shrink-0" />
                    {labels.customBadge}
                  </span>
                ) : highlight ? (
                  <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">{labels.mostPopular}</span>
                ) : null}
              </div>
              <h3
                id={`${id}-plan-${index}`}
                className={cn("text-sm font-semibold uppercase tracking-wider", custom ? "text-brand-100" : "text-brand-300")}
              >
                {tier.name}
              </h3>
              <div className="mt-3 flex items-end gap-1.5">
                <span className={cn("font-black tracking-tight", custom ? styles.customPrice : "text-4xl text-white")}>{tier.price}</span>
              </div>
              <p className="mt-1 text-xs text-faint">{tier.note}</p>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5">
                <DynamicIcon name="clock" className="size-4 text-neon-blue" />
                <span className="text-sm font-medium text-body">
                  {labels.deliveryLabel}
                  <span className="font-bold text-white">{tier.delivery}</span>
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-body">{tier.description}</p>
              {custom && (
                <p className="mt-4 border-l-2 border-neon-pink/70 pl-3 text-sm font-medium leading-relaxed text-brand-100">
                  {labels.customTagline}
                </p>
              )}
            </div>

            <ul className="relative z-[1] mt-7 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f.label} className={cn("flex items-start gap-3 text-sm leading-relaxed", custom ? "text-brand-50" : "text-body")}>
                  <span className={cn("grid size-6 shrink-0 place-items-center rounded-lg", custom ? styles.customFeatureIcon : "bg-brand-tint text-brand-300")}>
                    <DynamicIcon name={f.icon} className="size-3.5" />
                  </span>
                  <span className="min-w-0">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="relative z-[1] mt-8">
              <Button
                href="#contacto"
                className={cn("w-full justify-center", custom && styles.customCta)}
                variant={highlight || custom ? "primary" : "secondary"}
              >
                {custom ? labels.ctaPersonalizado : labels.ctaInteresa}
                {custom && <DynamicIcon name="arrowRight" className="size-4 shrink-0" />}
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
