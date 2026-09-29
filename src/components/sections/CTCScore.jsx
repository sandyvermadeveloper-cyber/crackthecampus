import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { CTC_SCORE_CONTENT } from '@/data/siteContent';

export default function CTCScore() {
  return (
    <section
      id="ctc-score"
      aria-labelledby="ctc-score-heading"
      className="relative border-b border-[#26262A] bg-[#07070A] py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          tag={CTC_SCORE_CONTENT.tag}
          title={CTC_SCORE_CONTENT.title}
          subtitle={CTC_SCORE_CONTENT.subtitle}
          centered
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Pillars Column */}
          <div className="lg:col-span-7 space-y-6">
            {CTC_SCORE_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative flex flex-col gap-4 rounded-xl border border-[#26262A] bg-[#141418]/60 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#141418]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/20 text-[#C4B5FD] font-mono text-sm font-bold">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#FAFAFA] sm:text-lg">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#A1A1AA]">
                        {pillar.category}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-2.5 py-0.5 text-xs font-semibold text-[#C4B5FD]">
                    {pillar.scoreImpact}
                  </span>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="flex items-center justify-between border-t border-[#26262A] pt-3 text-xs text-[#71717A]">
                  <span>Signal Metric:</span>
                  <span className="font-semibold text-[#D4D4D8]">
                    {pillar.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Score Credential Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#7C3AED]/40 bg-gradient-to-b from-[#180E29] via-[#0E0B16] to-[#07070A] p-6 sm:p-8 shadow-[0_0_40px_rgba(124,58,237,0.2)]">
              {/* Decorative Glow background */}
              <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-[#7C3AED]/20 blur-3xl" />

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#26262A] pb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C4B5FD]">
                    Official Credential
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified
                  </span>
                </div>

                {/* Score Dial Display */}
                <div className="flex flex-col items-center justify-center text-center py-4">
                  <div className="relative flex size-36 items-center justify-center rounded-full border-4 border-[#7C3AED]/40 bg-[#0B0B0E] shadow-[inset_0_0_20px_rgba(124,58,237,0.3)]">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-extrabold text-[#FAFAFA]">
                        {CTC_SCORE_CONTENT.scoreCard.sampleScore}
                      </span>
                      <span className="text-xs font-semibold text-[#A1A1AA]">
                        out of {CTC_SCORE_CONTENT.scoreCard.maxScore}
                      </span>
                    </div>
                  </div>
                  <h4 className="mt-4 text-base font-bold text-[#FAFAFA]">
                    CTC Placement Readiness Score
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Defensible, recruiter-trusted capability credential
                  </p>
                </div>

                {/* Verification Telemetry Summary */}
                <div className="space-y-2 rounded-xl border border-[#26262A] bg-[#0B0B0E]/80 p-4 text-xs">
                  <div className="flex justify-between text-[#A1A1AA]">
                    <span>Candidate:</span>
                    <span className="font-semibold text-white">
                      {CTC_SCORE_CONTENT.scoreCard.studentName}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#A1A1AA]">
                    <span>Status:</span>
                    <span className="font-semibold text-emerald-400">
                      {CTC_SCORE_CONTENT.scoreCard.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#A1A1AA]">
                    <span>Validation:</span>
                    <span className="font-semibold text-[#C4B5FD]">
                      Proctored & Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
