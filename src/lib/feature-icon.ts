import type { DynamicIconName as IconName } from "@/components/ui/Icons";

/** Icono según lo que dice cada punto del plan (mismo estilo que Páginas web). */
const featureIconRules: [RegExp, IconName][] = [
  [/whatsapp/i, "whatsapp"],
  [/soporte|support|acompañ/i, "messageSquare"],
  [/integra|conect|api|periféric|peripheral|dispositiv/i, "share"],
  [/automat/i, "zap"],
  [/módulo|module|personaliz|custom|medida/i, "sliders"],
  [/factur|invoic|venta|sale|pago|pay/i, "checkCircle"],
  [/inventar|inventory|product|catálog|catalog/i, "package"],
  [/report|estadíst|analytic|métric|metric|dashboard|panel/i, "barChart"],
  [/client|customer|usuario|user|equipo|team|rol/i, "users"],
  [/segur|secur|respaldo|backup|permis/i, "shield"],
  [/notific|correo|email|mail/i, "mail"],
  [/red|network|sucursal|branch|nube|cloud|despliegue|deploy/i, "globe"],
  [/dato|data|base/i, "database"],
  [/diseñ|design/i, "palette"],
  [/móvil|mobile|app|responsive/i, "devices"],
  [/todo lo del|everything in/i, "sparkles"],
];
export function featureIcon(label: string, index: number): IconName {
  const hit = featureIconRules.find(([rule]) => rule.test(label));
  if (hit) return hit[1];
  const fallback: IconName[] = ["layout", "trendingUp", "users", "shield", "barChart"];
  return fallback[index % fallback.length];
}
