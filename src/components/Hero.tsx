import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";

export const Hero = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toolDialogOpen, setToolDialogOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Ambient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(340 75% 65%) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <div className="mb-10 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 bg-card/40 backdrop-blur-md shadow-glow animate-fade-in">
            <span className="text-sm text-foreground font-semibold tracking-wide">MindVault</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm bg-gradient-accent bg-clip-text text-transparent font-medium">Debunk. Demystify. Design.</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-10 text-foreground animate-fade-in-slow leading-[1.05] tracking-tighter" style={{ animationDelay: '0.2s' }}>
            Clarity, Not Chaos:<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Build Systems That Help You Thrive
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Whether you're a student, educator, or leader, MindVault helps you cut through the noise, save time, and design systems that fit your real life.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="shadow-glow hover:shadow-elegant transition-all duration-500 text-lg px-8 py-6"
              onClick={() => setConsultationOpen(true)}
            >
              Book a 15-min Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-500 text-lg px-8 py-6"
              onClick={() => setToolDialogOpen(true)}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free Tools
            </Button>
          </div>
        </div>
      </section>

      <ConsultationDialog 
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
      
      <ToolSignupDialog
        open={toolDialogOpen}
        onOpenChange={setToolDialogOpen}
        toolName="Free Resources"
      />
    </>
  );
};
