import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CinematicHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Ambient orbs */}
      <div className="absolute top-32 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center py-32">
        <h1 className="text-hero font-display font-bold mb-12 text-foreground animate-fade-in leading-none tracking-tight">
          You're not behind.<br />
          <span className="bg-gradient-warm bg-clip-text text-transparent">
            You're just building the wrong systems.
          </span>
        </h1>

        <Link to="/services">
          <Button 
            size="lg"
            className="shadow-glow hover:shadow-elegant transition-all duration-500 text-xl px-12 py-8 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Start Here
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
