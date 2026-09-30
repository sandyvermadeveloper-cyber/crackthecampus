import { Check, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ButtonLink from '@/components/ui/ButtonLink';
import { ECOSYSTEM_CONTENT } from '@/data/siteContent';

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative border-b border-[#26262A] bg-[#0B0B0E] py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="ecosystem-heading"
          tag={ECOSYSTEM_CONTENT.tag}
          title={ECOSYSTEM_CONTENT.title}
          subtitle={ECOSYSTEM_CONTENT.subtitle}
          centered
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ECOSYSTEM_CONTENT.cores.map((core) => (
            <div
              key={core.id}
              className={`relative flex flex-col justify-between rounded-2xl border bg-gradient-to-b ${core.accent} p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]`}
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    {core.step}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${core.badgeColor}`}
                  >
                    {core.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#FAFAFA] sm:text-2xl">
                    {core.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C4B5FD] uppercase tracking-wide">
                    {core.subtitle}
                  </p>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {core.desc}
                  </p>
                </div>

                <div className="h-px w-full bg-[#26262A]" aria-hidden="true" />

                {/* Features list */}
                <ul className="space-y-4">
                  {core.features.map((feat) => (
                    <li key={feat.name} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/20 text-[#C4B5FD]">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-semibold text-[#FAFAFA]">
                          {feat.name}
                        </h4>
                        <p className="text-xs text-[#A1A1AA] leading-normal">
                          {feat.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="pt-8">
                <ButtonLink
                  href={core.ctaHref}
                  variant="primary"
                  className="w-full"
                  icon={
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                  }
                >
                  {core.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
