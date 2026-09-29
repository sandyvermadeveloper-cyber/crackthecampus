import { ArrowRight, Download } from 'lucide-react';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import { SITE_LINKS } from '@/lib/links';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-b border-[#26262A] bg-gradient-to-b from-[#0B0B0E] via-[#140C26] to-[#07070A] py-20 sm:py-28"
    >
      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/15 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
            Placement Readiness Starts Here
          </span>

          <h2
            id="cta-heading"
            className="text-balance text-3xl font-extrabold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl leading-tight"
          >
            Ready to Crack Your Campus Placements?
          </h2>

          <p className="text-base text-[#D4D4D8] sm:text-lg max-w-prose mx-auto leading-relaxed">
            Join thousands of engineering students preparing for internships and full-time hiring drives. Build your CTC Score and stand out to top employers today.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <ButtonLink
              href={SITE_LINKS.explore}
              variant="primary"
              size="lg"
              icon={
                <ArrowRight size={18} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
              }
            >
              Start Upskilling Free
            </ButtonLink>

            <ButtonLink
              href={SITE_LINKS.download}
              variant="secondary"
              size="lg"
              icon={
                <Download size={18} strokeWidth={2} />
              }
            >
              Download Pro-Suite
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
