import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm animate-fade-in">
          <span className="text-sm text-foreground font-medium">MindVault</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">Debunk. Demystify. Design.</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground animate-fade-in leading-[1.1] tracking-tight">
          Transform How You Work<br />
          <span className="text-primary">
            With AI & Systems Thinking
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Professional development, AI literacy training, and digital transformation for students, educators, and executives.
        </p>

        <div className="text-sm text-muted-foreground animate-fade-in">
          Choose your pathway below to get started ↓
        </div>
      </div>
    </section>
  );
};
