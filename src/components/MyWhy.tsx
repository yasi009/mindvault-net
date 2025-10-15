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
              I was always obsessed with intelligence — with how humans could be better, sharper, more perfect. Whether it was goals, grades, or validation — if it looked good, I got it. But I was miserable.
            </p>
            
            <p>
              I had systems that optimized everything — and trapped me in the very delusions I built. I thought I was becoming better, but really, I was just getting better at performing.
            </p>
            
            <p>
              Now, I build systems that help me stay human — systems built on alignment, reflection, and structure that still support real success.
            </p>
            
            <p>
              After years of feeling scattered across too many tools and overwhelmed by endless advice, I realized something simple: we don't need more information — we need clarity. We need a way to think for ourselves.
            </p>
            
            <p>
              That's what MindVault is about. It's not a productivity hack or a "10X your life" system. It's a space to reflect and design systems that actually work — for who you are, not who you've been told to be.
            </p>
            
            <p>
              Because every thought, feeling, and action is derived from how you see the world, yourself, and others — so let's make sure you see those things clearly.
            </p>
            
            <p>
              The work here is to challenge the illusions that build limiting beliefs, and to rebuild your internal operating system — with intention.
            </p>
            
            <p className="text-foreground font-medium italic text-2xl md:text-3xl leading-relaxed">
              <span className="border-b-2 border-accent">This is the real work of modern intelligence: learning to stay human in the age of systems.</span>
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
