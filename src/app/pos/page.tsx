"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { PlanTiers } from "@/components/sections/PlanTiers";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";

const content = {
  es: {
    eyebrow: "Sistemas POS · Punto de venta",
    title: "Vende más rápido y controla tu negocio desde un solo lugar.",
    description: "Un sistema POS diseñado para tiendas, pulperías, boutiques, cafeterías y comercios que necesitan cobrar, controlar inventario y entender sus números sin complicaciones.",
    cta: "Cotizar mi sistema POS",
    benefitsTitle: "Todo lo que tu punto de venta necesita",
    benefits: [
      ["layout", "Punto de venta ágil", "Registra ventas, aplica descuentos y cobra con rapidez desde cualquier dispositivo."],
      ["package", "Inventario en tiempo real", "Controla existencias, mínimos, entradas y salidas para evitar quiebres de stock."],
      ["users", "Clientes y proveedores", "Guarda información, historial de compras y datos útiles para atender mejor."],
      ["trendingUp", "Ventas y ganancias", "Consulta ingresos, productos más vendidos y resultados por periodo."],
      ["barChart", "Reportes claros", "Obtén reportes de caja, ventas e inventario para tomar decisiones con confianza."],
      ["shield", "Usuarios y permisos", "Define accesos para cajeros, administradores y propietarios."],
      ["zap", "Automatización", "Reduce tareas manuales con alertas, cierres de caja y procesos conectados."],
      ["globe", "Acceso desde cualquier lugar", "Tu operación disponible en computadora, tablet o teléfono."],
    ] as const,
    scopeTitle: "Elige el alcance de tu sistema",
    tiers: [
      {
        name: "Inicio",
        price: "$299.99",
        note: "precio de referencia",
        delivery: "1 – 2 semanas",
        description: "Operación esencial para comenzar a vender con orden y control.",
        features: [
          { icon: "layout", label: "Punto de venta ágil" },
          { icon: "package", label: "Catálogo centralizado de productos" },
          { icon: "box", label: "Control de existencias" },
          { icon: "checkCircle", label: "Cierres de caja precisos" },
          { icon: "search", label: "Búsqueda rápida de productos" },
          { icon: "devices", label: "Instalación en cualquier computadora" },
          { icon: "lock", label: "Acceso seguro desde navegador" },
        ],
      },
      {
        name: "Crecimiento",
        price: "$499.99",
        note: "precio de referencia",
        delivery: "2 – 3 semanas",
        description: "Más visibilidad y control para negocios en expansión.",
        features: [
          { icon: "layout", label: "Todo lo del plan Inicio" },
          { icon: "users", label: "Gestión de clientes y proveedores" },
          { icon: "barChart", label: "Reportes comerciales detallados" },
          { icon: "package", label: "Control de compras y abastecimiento" },
          { icon: "shield", label: "Usuarios y permisos por rol" },
          { icon: "zap", label: "Alertas de inventario bajo" },
          { icon: "devices", label: "Instalación en varias máquinas" },
          { icon: "database", label: "Respaldo y sincronización de datos" },
        ],
      },
      {
        name: "A la medida",
        price: "$799+",
        note: "según requerimientos",
        delivery: "Según alcance",
        description: "Una plataforma diseñada alrededor de los procesos específicos de tu negocio.",
        features: [
          { icon: "zap", label: "Todo lo del plan Crecimiento" },
          { icon: "checkCircle", label: "Facturación electrónica" },
          { icon: "share", label: "Integración con dispositivos y periféricos" },
          { icon: "sliders", label: "Módulos personalizados" },
          { icon: "rocket", label: "Automatización de procesos" },
          { icon: "mapPin", label: "Configuración de red y sucursales" },
          { icon: "lineChart", label: "Analíticas avanzadas de ventas" },
          { icon: "database", label: "Migración de tus datos actuales" },
          { icon: "messageSquare", label: "Soporte prioritario" },
        ],
      },
    ],
    labels: {
      deliveryLabel: "Entrega estimada: ",
      mostPopular: "Más solicitado",
      customBadge: "Máxima personalización",
      customTagline: "Una operación conectada, preparada para crecer contigo.",
      ctaInteresa: "Me interesa",
      ctaPersonalizado: "Solicitar cotización",
    },
  },
  en: {
    eyebrow: "POS systems · Point of sale",
    title: "Sell faster and run your business from one place.",
    description: "A POS system designed for shops, boutiques, cafés and retailers that need to take payments, control inventory and understand their numbers without complexity.",
    cta: "Get my POS quote",
    benefitsTitle: "Everything your point of sale needs",
    benefits: [
      ["layout", "Fast point of sale", "Register sales, apply discounts and take payments quickly from any device."],
      ["package", "Real-time inventory", "Track stock, minimums, purchases and sales to prevent shortages."],
      ["users", "Customers and suppliers", "Keep useful information and purchase history to serve people better."],
      ["trendingUp", "Sales and profits", "See revenue, top products and results by period."],
      ["barChart", "Clear reports", "Get cash, sales and inventory reports for confident decisions."],
      ["shield", "Users and permissions", "Set access levels for cashiers, managers and owners."],
      ["zap", "Automation", "Reduce manual work with alerts, cash closing and connected processes."],
      ["globe", "Access anywhere", "Keep your operation available on computer, tablet or phone."],
    ] as const,
    scopeTitle: "Choose your system scope",
    tiers: [
      {
        name: "Starter",
        price: "$299.99",
        note: "reference price",
        delivery: "1 – 2 weeks",
        description: "Essential operations to start selling with order and control.",
        features: [
          { icon: "layout", label: "Fast point of sale" },
          { icon: "package", label: "Central product catalog" },
          { icon: "box", label: "Stock control" },
          { icon: "checkCircle", label: "Accurate cash closing" },
          { icon: "search", label: "Quick product search" },
          { icon: "devices", label: "Install on any computer" },
          { icon: "lock", label: "Secure browser access" },
        ],
      },
      {
        name: "Growth",
        price: "$499.99",
        note: "reference price",
        delivery: "2 – 3 weeks",
        description: "More visibility and control for growing businesses.",
        features: [
          { icon: "layout", label: "Everything in Starter" },
          { icon: "users", label: "Customer and supplier management" },
          { icon: "barChart", label: "Detailed sales reports" },
          { icon: "package", label: "Purchase and restock control" },
          { icon: "shield", label: "Role-based users and permissions" },
          { icon: "zap", label: "Low-stock alerts" },
          { icon: "devices", label: "Install across multiple machines" },
          { icon: "database", label: "Data backup and sync" },
        ],
      },
      {
        name: "Custom",
        price: "$799+",
        note: "based on requirements",
        delivery: "Based on scope",
        description: "A platform designed around your business's specific processes.",
        features: [
          { icon: "zap", label: "Everything in Growth" },
          { icon: "checkCircle", label: "Electronic invoicing" },
          { icon: "share", label: "Device and peripheral integration" },
          { icon: "sliders", label: "Custom modules" },
          { icon: "rocket", label: "Process automation" },
          { icon: "mapPin", label: "Network and branch setup" },
          { icon: "lineChart", label: "Advanced sales analytics" },
          { icon: "database", label: "Migration of your current data" },
          { icon: "messageSquare", label: "Priority support" },
        ],
      },
    ],
    labels: {
      deliveryLabel: "Estimated delivery: ",
      mostPopular: "Most requested",
      customBadge: "Maximum customization",
      customTagline: "A connected operation, ready to grow with you.",
      ctaInteresa: "I'm interested",
      ctaPersonalizado: "Request a quote",
    },
  },
} as const;

export default function PosPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(22,139,255,0.16),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(138,0,255,0.16),transparent)]" />
        <Container className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">{t.eyebrow}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-body sm:text-lg">{t.description}</p>
          <div className="mt-8"><Button href="/#contacto" size="lg">{t.cta}<DynamicIcon name="arrowRight" className="size-4" /></Button></div>
        </Container>
      </section>
      <section className="bg-surface py-20 sm:py-24"><Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.benefitsTitle}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{t.benefits.map(([icon, title, description]) => <article key={title} className="rounded-2xl border border-line bg-card p-6 shadow-soft"><span className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300"><DynamicIcon name={icon} className="size-5" /></span><h3 className="mt-4 text-[15px] font-semibold text-strong">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-faint">{description}</p></article>)}</div>
      </Container></section>
      <section className="bg-page py-20 sm:py-24"><Container><h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.scopeTitle}</h2><PlanTiers id="pos" tiers={t.tiers} labels={t.labels} /></Container></section>
      <FinalCta />
      <ContactSection />
    </main>
  );
}
