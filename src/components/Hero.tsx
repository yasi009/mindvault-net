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
      {/* Orange ribbon banner */}
      <div className="w-full bg-accent py-4 mb-8 overflow-hidden">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="font-heading text-white italic text-lg md:text-xl tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN.
          </p>
          <p className="font-heading text-white italic text-lg md:text-xl tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN. • DEBUNK. DEMYSTIFY. DESIGN.
          </p>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-12">
          <div className="w-full text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-primary animate-fade-in leading-[1.05] tracking-tight italic uppercase w-full">
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-accent after:animate-fade-in">
                Think Clearly.
              </span>
              <br />
              Work Intentionally.
              <br />
              Lead Confidently.
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-xl md:text-2xl text-foreground animate-fade-in leading-relaxed">
              I help students, educators, and leaders cut through overwhelm and build systems that bring clarity, control, and calm to their work and life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center">
              <Button 
                size="lg"
                onClick={() => setConsultationOpen(true)}
              >
                Book a 15-min Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setToolDialogOpen(true)}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Tools
              </Button>
            </div>
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
