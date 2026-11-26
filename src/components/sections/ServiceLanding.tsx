"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { PlanTiers } from "@/components/sections/PlanTiers";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";
import { extraServices } from "@/data/extra-services";
import type { ExtraServiceSlug } from "@/data/extra-services";


/** Página de servicio con la misma estructura que /pos: hero, beneficios, alcances y contacto. */
export function ServiceLanding({ slug }: { slug: ExtraServiceSlug }) {
  const { lang } = useLanguage();
  const t = extraServices[slug][lang];

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(22,139,255,0.16),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(138,0,255,0.16),transparent)]" />
        <Container className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">{t.eyebrow}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-body sm:text-lg">{t.description}</p>
          <div className="mt-8"><Button href="/#contacto" size="lg">{t.cta}<DynamicIcon name="arrowRight" className="size-4" /></Button></div>
        </Container>
      </section>
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.benefitsTitle}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.benefits.map(([icon, title, description]) => (
              <article key={title} className="rounded-2xl border border-line bg-card p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300"><DynamicIcon name={icon} className="size-5" /></span>
                <h3 className="mt-4 text-[15px] font-semibold text-strong">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-faint">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-page py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.scopeTitle}</h2>
          <PlanTiers id={slug} tiers={t.tiers} labels={t.labels} />
        </Container>
      </section>
      <FinalCta />
      <ContactSection />
    </>
  );
}
