import { Heart } from "lucide-react";
import baliImage from "@/assets/yaseerah-bali-orphanage.jpg";

export const MyWhy = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Why</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I used to chase perfection — now I build systems that help me stay human.
            </p>
            
            <p>
              After years of drowning in tools and advice, I realized <span className="text-foreground font-medium">we don't need more information — we need clarity, structure, and a way to think for ourselves.</span>
            </p>
            
            <p className="text-foreground font-medium">
              That's what MindVault is about. Not hustle. Not hacks. Just systems that breathe.
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
