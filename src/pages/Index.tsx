import { Hero } from "@/components/Hero";
import { ClientWork } from "@/components/ClientWork";
import { About } from "@/components/About";
import { Workshops } from "@/components/Workshops";
import { FreeTools } from "@/components/FreeTools";
import { AudiencePackages } from "@/components/AudiencePackages";
import { SuccessStories } from "@/components/SuccessStories";
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
        <AudiencePackages />
        <FreeTools />
        <SuccessStories />
        <About />
        <Workshops />
        <Footer />
      </div>
    </AudienceProvider>
  );
};

export default Index;
