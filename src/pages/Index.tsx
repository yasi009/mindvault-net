import { Hero } from "@/components/Hero";
import { MyWhy } from "@/components/MyWhy";
import { PullQuote } from "@/components/PullQuote";
import { ProblemSection } from "@/components/ProblemSection";
import { GuideSection } from "@/components/GuideSection";
import { PlanSection } from "@/components/PlanSection";
import { ClientWork } from "@/components/ClientWork";
import { AudiencePackages } from "@/components/AudiencePackages";
import { SuccessFailureSection } from "@/components/SuccessFailureSection";
import { FreeTools } from "@/components/FreeTools";
import { SuccessStories } from "@/components/SuccessStories";
import { About } from "@/components/About";
import { Workshops } from "@/components/Workshops";
import { Footer } from "@/components/Footer";
import { AudienceSelector } from "@/components/AudienceSelector";
import { AudienceProvider } from "@/contexts/AudienceContext";
import { ComingSoon } from "@/components/ComingSoon";

const Index = () => {
  return (
    <AudienceProvider>
      <div className="min-h-screen">
        <Hero />
        <MyWhy />
        <PullQuote quote="True intelligence is seeing what's actually there." />
        <AudienceSelector />
        <ProblemSection />
        <PullQuote quote="You don't rise to your goals; you fall to your systems." className="bg-gradient-soft" />
        <GuideSection />
        <PlanSection />
        <PullQuote quote="Leadership begins with self-awareness." />
        <ClientWork />
        <AudiencePackages />
        <SuccessFailureSection />
        <FreeTools />
        <SuccessStories />
        <About />
        <Workshops />
        <ComingSoon />
        <Footer />
      </div>
    </AudienceProvider>
  );
};

export default Index;
