import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";
import { useAudience } from "@/contexts/AudienceContext";

export const Footer = () => {
  const { audience } = useAudience();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toolDialogOpen, setToolDialogOpen] = useState(false);

  const getCTA = () => {
    switch (audience) {
      case "students":
        return {
          primary: "Download Free Life OS Template",
          secondary: "Book a Free Clarity Call"
        };
      case "educators":
        return {
          primary: "Book a PD Workshop",
          secondary: "Get Free Resources"
        };
      case "executives":
        return {
          primary: "Book Your 15-Min Consultation",
          secondary: "Get AI Readiness Assessment"
        };
      default:
        return {
          primary: "Book Free Consultation",
          secondary: "Download Life OS"
        };
    }
  };

  const cta = getCTA();

  return (
    <>
      <footer className="bg-foreground text-background py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Vision CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
              Systems designed with care create lives lived with purpose.
            </h2>
            <p className="text-xl text-background/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's build one that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setToolDialogOpen(true)}
              >
                Download Free Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-background/20 bg-transparent text-background hover:bg-background/10"
                onClick={() => setConsultationOpen(true)}
              >
                Book a 15-min Call
              </Button>
            </div>
          </div>

        {/* Footer Links */}
        <div className="border-t border-background/20 pt-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">MindVault</h3>
              <p className="text-background/70">
                A space to think clearly, design intentionally, and lead with clarity — for students, educators, and leaders ready to build systems that fit who they actually are.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
                <li><a href="#workshops" className="hover:text-background transition-colors">Workshops</a></li>
                <li><a href="#resources" className="hover:text-background transition-colors">Free Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="mailto:admin@mindvault.net.au" className="text-background/70 hover:text-background transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/yaseerah-hassan-66a51b249" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-background/50 text-sm">
            <p>© {new Date().getFullYear()} MindVault. Designed with intention. Built for the future.</p>
          </div>
        </div>
      </div>
    </footer>
    
    <ConsultationDialog 
      open={consultationOpen}
      onOpenChange={setConsultationOpen}
    />
    
    <ToolSignupDialog
      open={toolDialogOpen}
      onOpenChange={setToolDialogOpen}
      toolName={audience === "students" ? "Life OS Template" : "Free Resources"}
    />
    </>
  );
};
