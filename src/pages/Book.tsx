import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Linkedin } from "lucide-react";

const Book = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic uppercase">
            Book a Discovery Call
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A 30-minute conversation to understand your institution, your current AI situation, and where MindVault might fit.
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yaseerah-mindvault/30min?background_color=ffecf0&text_color=773260&primary_color=f28a5d"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Prefer to reach out directly?
          </h2>
          <p className="text-muted-foreground mb-8">
            Email us or connect on LinkedIn — we typically respond within 24 hours on business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:admin@mindvault.net.au"
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border hover:shadow-soft transition-shadow group"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                admin@mindvault.net.au
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/yaseerah-hassan-66a51b249"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border hover:shadow-soft transition-shadow group"
            >
              <Linkedin className="w-5 h-5 text-accent" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                Connect with Yaseerah
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
