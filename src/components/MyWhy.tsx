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
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'hsl(340 45% 75%)' }}>Our Mission</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-heading">
            <p>
              We were always obsessed with intelligence — with how humans could be <strong>better, sharper, more perfect</strong>. Whether it was goals, grades, or validation — if it looked good, we got it. But we were <strong>miserable</strong>.
            </p>
            
            <p>
              We built systems that optimized everything — and in the process, got stuck inside the delusions of who we thought we needed to be. Now, we build systems that help us <strong>stay human</strong>. Systems that keep us in alignment, but still hold structure and discipline for success.
            </p>
            
            <p>
              After years of feeling scattered across too many tools and overwhelmed by endless advice, we realized something simple: we don't need more information — we need <strong>clarity</strong>. We need a way to <strong>think for ourselves</strong>.
            </p>
            
            <p>
              That's what MindVault is about. It's not a productivity hack or a "10X your life" system. It's a space to reflect, and design systems that actually work — for <strong>who you are</strong>, not who you've been told to be.
            </p>
            
            <p>
              Because every thought, feeling, and action is derived from how you see the world, yourself, and others. So let's make sure we see these things <strong>clearly</strong>.
            </p>
            
            <p>
              The work here is to challenge those illusions that build <strong>limiting beliefs</strong> — to rebuild our internal operating systems with <strong>intention</strong>.
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
          
          <div className="relative space-y-6">
            <p className="text-foreground font-medium italic text-xl md:text-2xl leading-relaxed">
              <span className="border-b-2 border-accent">This is the real work of modern intelligence: learning to stay human in the age of systems.</span>
            </p>
            
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
