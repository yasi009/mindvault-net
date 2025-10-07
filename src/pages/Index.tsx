import { Hero } from "@/components/Hero";
import { MyWhy } from "@/components/MyWhy";
import { PullQuote } from "@/components/PullQuote";
import { AudienceTabs } from "@/components/AudienceTabs";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ProblemSection } from "@/components/ProblemSection";
import { GuideSection } from "@/components/GuideSection";
import { PlanSection } from "@/components/PlanSection";
import { ClientWork } from "@/components/ClientWork";
import { AudiencePackages } from "@/components/AudiencePackages";
import { SuccessFailureSection } from "@/components/SuccessFailureSection";
import { FreeTools } from "@/components/FreeTools";
import { WorkshopsEvents } from "@/components/WorkshopsEvents";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { AudienceProvider } from "@/contexts/AudienceContext";

const Index = () => {
  return (
    <AudienceProvider>
      <div className="min-h-screen">
        <Hero />
        <MyWhy />
        <PullQuote quote="True intelligence is seeing what's actually there." />
        <AudienceTabs />
        <TestimonialsCarousel />
        <ProblemSection />
        <PullQuote quote="You don't rise to your goals; you fall to your systems." className="bg-gradient-soft" />
        <GuideSection />
        <PlanSection />
        <PullQuote quote="Leadership begins with self-awareness." />
        <ClientWork />
        <AudiencePackages />
        <SuccessFailureSection />
        <FreeTools />
        <WorkshopsEvents />
        <About />
        <Footer />
      </div>
    </AudienceProvider>
  );
};

export default Index;
