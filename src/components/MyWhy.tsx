import { Heart } from "lucide-react";

export const MyWhy = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Heart className="w-7 h-7 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">My Why</h2>
        </div>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I used to chase perfection — now I build systems that help me stay human. After years of feeling scattered across too many tools and overwhelmed by endless advice, I realized something: <span className="text-foreground font-medium">we don't need more information. We need clarity, structure, and a way to think for ourselves.</span>
          </p>
          
          <p>
            That's what MindVault is about. It's not a productivity hack or another "10X your life" promise. It's a space to breathe, reflect, and design systems that actually work for who you are — not who you think you should be.
          </p>
          
          <p className="text-foreground font-medium italic">
            I believe true intelligence is seeing what's actually there. And leadership begins with knowing yourself first.
          </p>
        </div>
      </div>
    </section>
  );
};
