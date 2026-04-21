import { Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16 px-6 md:px-16 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xl font-heading font-semibold mb-2">
            MindVault<sup className="text-[0.5em] ml-0.5">™</sup>
          </p>
          <p className="text-sm text-background/60">AI Advisory & Learning Design · Abu Dhabi, UAE</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:admin@mindvault.net.au"
            className="text-background/60 hover:text-background transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yaseerah-hassan-66a51b249"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
