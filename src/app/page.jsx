import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Ecosystem from '@/components/sections/Ecosystem';
import CTCScore from '@/components/sections/CTCScore';
import Contests from '@/components/sections/Contests';
import Infrastructure from '@/components/sections/Infrastructure';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0E] selection:bg-[#7C3AED]/40 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Ecosystem />
        <CTCScore />
        <Contests />
        <Infrastructure />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
