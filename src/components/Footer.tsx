import { Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16 px-6 md:px-16 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xl font-heading font-semibold mb-2">
            TheMindVault<sup className="text-[0.5em] ml-0.5">™</sup>
          </p>
          <p className="text-sm text-background/60">Think clearly. Work intentionally. Live sustainably.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:yaseerah@themindvault.net" className="text-background/60 hover:text-background transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/yaseerah-hassan-66a51b249" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://the-life-os.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-background/60 hover:text-background transition-colors ml-2">
            Login to your Life OS →
          </a>
        </div>
      </div>
    </footer>
  );
};
