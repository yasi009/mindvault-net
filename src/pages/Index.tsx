import { Navigation } from "@/components/Navigation";
import { CinematicHero } from "@/components/home/CinematicHero";
import { TheHook } from "@/components/home/TheHook";
import { VisualStory } from "@/components/home/VisualStory";
import { SocialProof } from "@/components/home/SocialProof";
import { EssentialismPitch } from "@/components/home/EssentialismPitch";
import { NextSteps } from "@/components/home/NextSteps";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CinematicHero />
      <TheHook />
      <VisualStory />
      <SocialProof />
      <EssentialismPitch />
      <NextSteps />
      <Footer />
    </div>
  );
};

export default Index;
