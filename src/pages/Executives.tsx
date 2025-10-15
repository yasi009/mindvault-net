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

const ExecutivesContent = () => {
  const { setAudience } = useAudience();
  
  useEffect(() => {
    setAudience("executives");
  }, [setAudience]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">For Executives</h1>
          <p className="text-xl text-muted-foreground">Strategic AI integration for organizational transformation</p>
        </div>
      </section>
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <PullQuote quote="Leadership begins with self-awareness." />
      <ClientWork />
      <AudiencePackages />
      <SuccessFailureSection />
      <FreeTools />
      <Footer />
    </div>
  );
};

const Executives = () => {
  return (
    <AudienceProvider>
      <ExecutivesContent />
    </AudienceProvider>
  );
};

export default Executives;
