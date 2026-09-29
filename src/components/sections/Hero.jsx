import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import { SITE_LINKS } from '@/lib/links';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[max(36rem,calc(100vh-4rem))] flex-col justify-center overflow-hidden border-b border-[#26262A] bg-[#0B0B0E] md:block md:min-h-0"
    >
      {/* Background Student Photo Layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/hero-promo-office.jpg"
          alt="Student preparing for placement drives"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_22%] max-sm:object-[60%_18%] sm:object-[70%_24%] lg:object-[72%_24%]"
        />

        {/* Mobile top overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0e]/95 via-[#0b0b0e]/50 to-[#0b0b0e]/20 sm:hidden"
          aria-hidden="true"
        />

        {/* Desktop Multi-stop Horizontal Gradient */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to right,
              rgba(11, 11, 14, 0.98) 0%,
              rgba(11, 11, 14, 0.94) 12%,
              rgba(11, 11, 14, 0.85) 25%,
              rgba(11, 11, 14, 0.68) 38%,
              rgba(11, 11, 14, 0.42) 50%,
              rgba(11, 11, 14, 0.18) 62%,
              rgba(11, 11, 14, 0.05) 75%,
              transparent 88%
            )`,
          }}
          aria-hidden="true"
        />

        {/* Top vignette overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(0,0,0,0.4)_0%,transparent_60%)]"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <Container className="relative z-10 flex flex-1 flex-col justify-center py-12 sm:py-20 md:block md:py-28 lg:py-36">
        <div className="flex w-full max-w-xl flex-col gap-6 sm:gap-8 lg:max-w-[42rem]">
          {/* Left Accent Container */}
          <div className="space-y-4 border-l-2 border-[#7C3AED]/80 pl-3.5 sm:space-y-5 sm:pl-5 md:pl-6">
            <h1
              id="hero-heading"
              className="text-balance text-3xl font-semibold tracking-[-0.02em] text-[#FAFAFA] drop-shadow-[0_2px_28px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-[3.25rem] leading-[1.08]"
            >
              Your Fast Track to Top Placements.
            </h1>
            <div className="space-y-3 text-[#D4D4D8] [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] sm:space-y-4">
              <p className="max-w-prose text-sm leading-[1.65] sm:text-base lg:text-lg">
                Upskill with industry-expert courses and master{' '}
                <span className="font-medium text-[#ECECF1]">Corporate Pathways</span> built for your dream companies.
              </p>
              <p className="max-w-prose text-sm leading-[1.65] sm:text-base lg:text-lg">
                Build a <span className="font-medium text-[#ECECF1]">CTC Score</span> that gets you noticed.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex w-full flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink
              href={SITE_LINKS.explore}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold"
              icon={
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              }
            >
              Start Upskilling
            </ButtonLink>

            <ButtonLink
              href={SITE_LINKS.signup}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto border-white/25 bg-white/[0.08] backdrop-blur-xl hover:bg-white/[0.14] px-8 py-3.5 text-sm font-semibold"
              icon={
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              }
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
