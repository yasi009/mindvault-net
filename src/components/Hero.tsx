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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
        {/* Ethereal glow effect */}
        <div className="absolute inset-0 bg-gradient-glow opacity-60"></div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(262 83% 58%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm animate-fade-in shadow-glow">
            <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">MindVault</span>
            <span className="text-xs text-primary/60">•</span>
            <span className="text-sm text-muted-foreground">Debunk. Demystify. Design.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in leading-[1.1] tracking-tight">
            <span className="text-foreground">Think Clearly.</span><br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work Intentionally. Lead Confidently.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            I help students, educators, and leaders cut through overwhelm and build systems that bring clarity, control, and calm to their work and life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500"
              onClick={() => setConsultationOpen(true)}
            >
              Book a 15-min Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
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
