import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { INFRASTRUCTURE_CONTENT } from '@/data/siteContent';

export default function Infrastructure() {
  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-heading"
      className="relative border-b border-[#26262A] bg-[#07070A] py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="infrastructure-heading"
          tag={INFRASTRUCTURE_CONTENT.tag}
          title={INFRASTRUCTURE_CONTENT.title}
          subtitle={INFRASTRUCTURE_CONTENT.subtitle}
          centered
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {INFRASTRUCTURE_CONTENT.stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#26262A] bg-gradient-to-b from-[#141418] to-[#0B0B0E] p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              <div className="space-y-3">
                <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-[#C4B5FD]">
                  {stat.value}
                </div>
                <h3 className="text-base font-bold text-[#FAFAFA]">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] transition-all duration-300 group-hover:w-20" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
