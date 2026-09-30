import Container from '@/components/ui/Container';
import { TRUSTED_COMPANIES_ROW1, TRUSTED_COMPANIES_ROW2 } from '@/data/siteContent';

export default function SocialProof() {
  // 4x duplicated arrays to guarantee seamless -50% to 0% infinite loop
  const row1Logos = [
    ...TRUSTED_COMPANIES_ROW1,
    ...TRUSTED_COMPANIES_ROW1,
    ...TRUSTED_COMPANIES_ROW1,
    ...TRUSTED_COMPANIES_ROW1,
  ];

  const row2Logos = [
    ...TRUSTED_COMPANIES_ROW2,
    ...TRUSTED_COMPANIES_ROW2,
    ...TRUSTED_COMPANIES_ROW2,
    ...TRUSTED_COMPANIES_ROW2,
  ];

  return (
    <section
      id="trust"
      aria-labelledby="trust-marquee-heading"
      className="relative border-b border-[#26262A] bg-[#0B0B0E] py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <Container className="mb-10 text-center">
        <h2
          id="trust-marquee-heading"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400/90 sm:text-sm"
        >
          Empowering students to crack recruitment at…
        </h2>
      </Container>

      {/* Marquee Wrapper with Side Gradients */}
      <div className="relative w-full overflow-hidden space-y-8 sm:space-y-10">
        {/* Edge Gradient Mask Overlays */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/80 to-transparent sm:w-32 md:w-48"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#0B0B0E] via-[#0B0B0E]/80 to-transparent sm:w-32 md:w-48"
          aria-hidden="true"
        />

        {/* ROW 1: Leftward Infinite Marquee (0% -> -50%) */}
        <div className="group/row flex w-full overflow-hidden select-none">
          <div className="flex w-max min-w-max items-center gap-8 sm:gap-14 md:gap-20 animate-marquee">
            {row1Logos.map((company, idx) => (
              <div
                key={`r1-${company.name}-${idx}`}
                aria-hidden={idx >= TRUSTED_COMPANIES_ROW1.length ? 'true' : undefined}
                className="group/logo flex h-10 sm:h-12 shrink-0 items-center justify-center px-4 cursor-pointer transition-transform duration-300 hover:scale-110"
                title={company.name}
              >
                <svg
                  role="img"
                  viewBox={company.viewBox}
                  aria-label={`${company.name} logo`}
                  className="h-6 sm:h-7 md:h-8 w-auto max-w-[6.5rem] sm:max-w-[8rem] text-zinc-400 opacity-50 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                  style={{ color: company.color }}
                >
                  <path fill="currentColor" d={company.path} />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Rightward Infinite Marquee (-50% -> 0% Reverse direction) */}
        <div className="group/row flex w-full overflow-hidden select-none">
          <div className="flex w-max min-w-max items-center gap-8 sm:gap-14 md:gap-20 animate-marquee-reverse">
            {row2Logos.map((company, idx) => (
              <div
                key={`r2-${company.name}-${idx}`}
                aria-hidden={idx >= TRUSTED_COMPANIES_ROW2.length ? 'true' : undefined}
                className="group/logo flex h-10 sm:h-12 shrink-0 items-center justify-center px-4 cursor-pointer transition-transform duration-300 hover:scale-110"
                title={company.name}
              >
                <svg
                  role="img"
                  viewBox={company.viewBox}
                  aria-label={`${company.name} logo`}
                  className="h-6 sm:h-7 md:h-8 w-auto max-w-[6.5rem] sm:max-w-[8rem] text-zinc-400 opacity-50 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                  style={{ color: company.color }}
                >
                  <path fill="currentColor" d={company.path} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
