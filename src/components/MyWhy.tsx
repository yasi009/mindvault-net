import { Heart } from "lucide-react";
import baliImage from "@/assets/yaseerah-bali-orphanage.jpg";

export const MyWhy = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'hsl(340 45% 75%)' }}>My Mission</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As an overachieving UNSW international student and strategist consultant, <span className="font-heading text-primary italic relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary">I used to chase perfection — now I build systems that help me stay human.</span> After years of feeling scattered across too many tools and overwhelmed by endless advice, I realized something: <span className="font-heading text-primary italic relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary">we don't need more information. We need clarity, structure, and a way to think for ourselves.</span>
            </p>
            
            <p>
              That's what MindVault is about. It's not a productivity hack or another "10X your life" promise. It's a space to breathe, reflect, and design systems that actually work for who you are — not who you think you should be.
            </p>
            
            <p className="text-foreground font-medium italic">
              I believe true intelligence is seeing what's actually there. And leadership begins with knowing yourself first.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={baliImage} 
              alt="Yaseerah teaching mindfulness at Bali orphanage"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
