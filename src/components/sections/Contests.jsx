import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { CONTESTS_CONTENT } from '@/data/siteContent';

export default function Contests() {
  return (
    <section
      id="contests"
      aria-labelledby="contests-heading"
      className="relative border-b border-[#26262A] bg-[#0B0B0E] py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="contests-heading"
          tag={CONTESTS_CONTENT.tag}
          title={CONTESTS_CONTENT.title}
          subtitle={CONTESTS_CONTENT.subtitle}
          centered
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Reward Tiers Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#FAFAFA] sm:text-2xl">
                Career Rewards & Recognized Excellence
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {CONTESTS_CONTENT.desc}
              </p>
            </div>

            <div className="space-y-4">
              {CONTESTS_CONTENT.rewardTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="flex items-start justify-between gap-4 rounded-xl border border-[#26262A] bg-[#141418]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#7C3AED]/40"
                >
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#FAFAFA]">
                      {tier.tier}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-normal">
                      {tier.reward}
                    </p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-xs font-semibold ${tier.accent}`}
                  >
                    {tier.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Contest Leaderboard Card */}
          <div className="lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#26262A] bg-gradient-to-b from-[#141418] to-[#09090C] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#26262A] pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                      {CONTESTS_CONTENT.liveContest.status}
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {CONTESTS_CONTENT.liveContest.title}
                    </h4>
                  </div>
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                    Monthly Contest
                  </span>
                </div>

                <div className="text-xs text-[#A1A1AA]">
                  {CONTESTS_CONTENT.liveContest.deadline}
                </div>

                {/* Bounties preview */}
                <div className="space-y-2 rounded-xl border border-[#26262A] bg-[#0B0B0E]/80 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
                    Contest Bounties
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#D4D4D8]">
                    {CONTESTS_CONTENT.liveContest.bounties.map((bounty, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#7C3AED]" />
                        {bounty}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Leaderboard Table Preview */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider px-2">
                    <span>Rank</span>
                    <span>Participant</span>
                    <span>Score Pts</span>
                  </div>

                  <div className="space-y-2">
                    {CONTESTS_CONTENT.liveContest.leaderboard.map((row) => (
                      <div
                        key={row.rank}
                        className="flex items-center justify-between rounded-lg border border-[#26262A] bg-[#141418] px-4 py-2.5 text-xs"
                      >
                        <span className="font-mono font-bold text-[#C4B5FD]">
                          #{row.rank}
                        </span>
                        <span className="font-mono text-white">{row.name}</span>
                        <span className="font-bold text-emerald-400">
                          {row.pts} Pts
                        </span>
                      </div>
                    ))}
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
