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
        {/* Glowing vault visual */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-glow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm animate-fade-in">
            <span className="text-sm text-foreground font-medium">TheMindVault</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Debunk. Demystify. Design.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground animate-fade-in leading-[1.1] tracking-tight">
            Build Your Life OS.<br />
            <span className="text-primary">
              Study Smarter. Feel Less Stressed.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Stop feeling scattered. Start building systems that help you organize your studies, manage your time, and feel more in control of your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
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
