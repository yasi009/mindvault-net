import { Hero } from "@/components/Hero";
import { ClientWork } from "@/components/ClientWork";
import { About } from "@/components/About";
import { WhatIOffer } from "@/components/WhatIOffer";
import { Workshops } from "@/components/Workshops";
import { FreeTools } from "@/components/FreeTools";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { AudienceSelector } from "@/components/AudienceSelector";
import { AudienceProvider } from "@/contexts/AudienceContext";

const Index = () => {
  return (
    <AudienceProvider>
      <div className="min-h-screen">
        <Hero />
        <AudienceSelector />
        <ClientWork />
        <WhatIOffer />
        <PricingSection />
        <About />
        <Workshops />
        <FreeTools />
        <Footer />
      </div>
    </AudienceProvider>
  );
};

export default Index;
