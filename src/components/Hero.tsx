import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gradient.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      
      {/* Hero image */}
      <div className="absolute inset-0 opacity-30">
        <img src={heroImage} alt="MindVault" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <div className="mb-6 inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-soft animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground font-medium">Education & Mentorship for Gen Z</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in leading-tight">
          Debunk, Demystify &<br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Design Your Future
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          Build your Life Operating System. Master custom GPTs. Design the future you deserve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button variant="hero" size="xl">
            Get Free Life OS Template
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="soft" size="xl">
            Book 1:1 Coaching
          </Button>
        </div>
      </div>
    </section>
  );
};
