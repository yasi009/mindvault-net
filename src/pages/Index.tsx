import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MyWhy } from "@/components/MyWhy";
import { PullQuote } from "@/components/PullQuote";
import { GuideSection } from "@/components/GuideSection";
import { Workshops } from "@/components/Workshops";
import { Footer } from "@/components/Footer";
import { AudienceSelector } from "@/components/AudienceSelector";
import { AudienceProvider } from "@/contexts/AudienceContext";
import { ComingSoon } from "@/components/ComingSoon";

const Index = () => {
  return (
    <AudienceProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <MyWhy />
        <PullQuote quote="You don't rise to your goals; you fall to your systems." />
        <AudienceSelector />
        <GuideSection />
        <Workshops />
        <ComingSoon />
        <Footer />
      </div>
    </AudienceProvider>
  );
};

export default Index;
