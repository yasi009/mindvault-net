import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";
export const Hero = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toolDialogOpen, setToolDialogOpen] = useState(false);
  return <>
      {/* Orange ribbon banner */}
      <div className="w-full bg-accent py-4 mb-8 overflow-hidden">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="font-heading text-white italic text-lg md:text-xl tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN.
          </p>
          <p className="font-heading text-white italic text-lg md:text-xl tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN.
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 space-y-8 sm:space-y-12">
          <div className="w-full text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary animate-fade-in leading-[1.05] tracking-tight italic uppercase w-full">
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-accent after:animate-fade-in">
                Design your Life OS.
              </span>
              <br />
              Think clearly.
              <br />
              Act intentionally.
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <p className="text-xl text-muted-foreground mb-8">
              A Notion-based, AI-guided system that turns values into habits, habits into goals, and goals into results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center">
              <Button size="lg" onClick={() => window.location.href = '/services'}>
                Explore the Life OS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      
      <ToolSignupDialog open={toolDialogOpen} onOpenChange={setToolDialogOpen} toolName="Free Resources" delayedDelivery={true} />
    </>;
};