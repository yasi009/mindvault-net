import { Hero } from "@/components/Hero";
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
        <AudienceSelector />
        <ProblemSection />
        <GuideSection />
        <PlanSection />
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
