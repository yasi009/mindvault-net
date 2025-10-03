import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gradient.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(262 52% 47%) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
        <div className="mb-8 inline-flex items-center gap-2 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground font-medium">AI Literacy & Digital Confidence for Educators</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground animate-fade-in leading-[1.1] tracking-tight">
          Empower Your Teaching<br />
          <span className="text-primary">
            With AI & Systems Design
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Professional development workshops, custom classroom GPTs, and digital transformation consulting for educators who want to save time, boost engagement, and build future-ready classrooms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="text-base px-8">
            Book a PD Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8">
            Explore Tools for Teachers
          </Button>
        </div>
      </div>
    </section>
  );
};
