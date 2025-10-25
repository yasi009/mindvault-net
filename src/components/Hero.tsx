import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";

export const Hero = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      {/* Thin Marquee Banner */}
      <div className="w-full bg-accent py-2 overflow-hidden">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="font-heading text-white italic text-sm md:text-base tracking-[0.3em] uppercase px-6">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
          <p className="font-heading text-white italic text-sm md:text-base tracking-[0.3em] uppercase px-6">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
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
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in leading-[1.05] tracking-tight italic uppercase">
              <span className="text-primary underline decoration-accent decoration-4">Think</span> clearer.
              <br />
              <span className="text-accent underline decoration-primary decoration-4">Do</span> less.
              <br />
              <span className="text-primary underline decoration-accent decoration-4">Achieve</span> more.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mt-8 mb-10 max-w-3xl mx-auto leading-relaxed">
              An AI-guided Life OS in Notion that turns your values into daily action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center">
              <Button size="lg" onClick={() => setWaitlistOpen(true)}>
                Get Life OS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/method'}>
                See How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      
      <ToolSignupDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
        toolName="MindVault Life OS" 
        delayedDelivery={false} 
      />
    </>
  );
};