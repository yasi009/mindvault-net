import { Navigation } from "@/components/Navigation";
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
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { AudienceProvider } from "@/contexts/AudienceContext";
import { useEffect } from "react";
import { useAudience } from "@/contexts/AudienceContext";

const EducatorsContent = () => {
  const { setAudience } = useAudience();
  
  useEffect(() => {
    setAudience("educators");
  }, [setAudience]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MyWhy />
      <PullQuote quote="True intelligence is seeing what's actually there." />
      <ProblemSection />
      <PullQuote quote="You don't rise to your goals; you fall to your systems." className="bg-gradient-soft" />
      <GuideSection />
      <PlanSection />
      <PullQuote quote="Leadership begins with self-awareness." />
      <ClientWork />
      <AudiencePackages />
      <SuccessFailureSection />
      <FreeTools />
      <About />
      <Footer />
    </div>
  );
};

const Educators = () => {
  return (
    <AudienceProvider>
      <EducatorsContent />
    </AudienceProvider>
  );
};

export default Educators;
