import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";
import { Link } from "react-router-dom";
export const Footer = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toolDialogOpen, setToolDialogOpen] = useState(false);
  return <>
      <footer className="bg-foreground text-background py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Vision CTA Section */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-background italic px-2">
              Ready to transform confusion into clarity?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-background/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
              Let's design systems that work for you, not against you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://mindvault-life-os.lovable.app" target="_blank" rel="noopener noreferrer">
                  Get Life OS
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-background/20 bg-transparent text-background hover:bg-background/10 w-full sm:w-auto" onClick={() => setConsultationOpen(true)}>
                Book a Consultation
              </Button>
            </div>
          </div>

        {/* Footer Links */}
        <div className="border-t border-background/20 pt-8 sm:pt-10 md:pt-12">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">MindVault</h3>
              <p className="text-sm sm:text-base text-background/70 leading-relaxed">Think about the dissonance between your current self and your future self. 
MindVault uses AI and structure to close that gap with clarity, calm, and consistency.</p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base text-background/70">
                <li><Link to="/" className="hover:text-background transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-background transition-colors">Product (Life OS)</Link></li>
                <li><Link to="/work-with-us" className="hover:text-background transition-colors">Work With Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-background transition-colors">Case Studies</Link></li>
                <li><Link to="/about-us" className="hover:text-background transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h4>
              <div className="flex gap-3 sm:gap-4">
                <a href="mailto:admin@mindvault.net.au" className="text-background/70 hover:text-background transition-colors">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/yaseerah-hassan-66a51b249" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                  <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-background/50 text-sm">
            <p>© {new Date().getFullYear()} MindVault. Debunk. Demystify. Design.</p>
          </div>
        </div>
      </div>
    </footer>
    
    <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
    
    <ToolSignupDialog open={toolDialogOpen} onOpenChange={setToolDialogOpen} toolName="Free Resources" delayedDelivery={true} />
    </>;
};