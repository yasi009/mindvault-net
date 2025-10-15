import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import baliImage from "@/assets/yaseerah-workshop-nida.jpg";

export const MyWhy = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'hsl(340 45% 75%)' }}>My Mission</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-heading">
            <p>
              As an overachieving UNSW international student and strategist consultant, I used to chase perfection — now I build systems that help me stay human. After years of feeling scattered across too many tools and overwhelmed by endless advice, I realized something: we don't need more information. We need clarity, structure, and a way to think for ourselves.
            </p>
            
            <p>
              That's what MindVault is about. It's not a productivity hack or another "10X your life" promise. It's a space to breathe, reflect, and design systems that actually work for who you are — not who you think you should be.
            </p>
            
            <p className="text-foreground font-medium italic text-2xl md:text-3xl leading-relaxed">
              <span className="border-b-2 border-accent">I believe true intelligence is seeing what's actually there.</span> And <span className="border-b-2 border-accent">leadership begins with knowing yourself first.</span>
            </p>

            <div className="flex justify-center mt-8">
              <Button
                onClick={() => navigate('/about-us')}
                className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-colors duration-300 text-2xl py-6 px-8 font-heading italic"
              >
                About our Philosophy
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={baliImage} 
              alt="Yaseerah presenting at NIDA workshop on clarity and systems design"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
