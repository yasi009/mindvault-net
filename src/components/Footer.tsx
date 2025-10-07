import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your Future System
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Ready to turn chaos into clarity? Get started with a free consultation or grab your Life OS template.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-background/20 bg-transparent text-background hover:bg-background/10">
              Download Life OS
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-background/20 pt-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">MindVault</h3>
              <p className="text-background/70">
                Empowering Gen Z and young adults with systems, AI literacy, and mentorship.
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
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Instagram className="w-6 h-6" />
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
  );
};
