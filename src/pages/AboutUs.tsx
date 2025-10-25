import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import yaseerahImage from "@/assets/yaseerah-unsw-teaching.jpg";

export const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
    
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic uppercase">
            Why MindVault?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Human depth meets digital intelligence.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <video 
                controls
                className="rounded-lg shadow-elegant w-full"
                poster={yaseerahImage}
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Meet the Founder
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                In a world drowning in tools and advice, what's missing isn't more information—it's clarity. The ability to cut through noise, design intentional systems, and lead with confidence.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                MindVault exists to bridge the gap between human potential and technological possibility. We don't just teach tools—we help you think clearly, work intentionally, and lead confidently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through workshops, consulting, and custom solutions, we transform overwhelm into clarity—one system, one leader, one decision at a time.
              </p>
            </div>
          </div>

          {/* Core Belief */}
          <Card className="bg-gradient-card p-10 mb-16 border-border shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground italic uppercase">
              Our Core Belief
            </h3>
            <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed">
              Systems designed with care create lives lived with purpose.
            </p>
          </Card>

          {/* Brand Framework */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-3 text-accent uppercase tracking-wide">Debunk</h4>
              <p className="text-muted-foreground leading-relaxed">
                We cut through assumptions and identify what's not working. No jargon, no fluff—just honest assessment.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-3 text-accent uppercase tracking-wide">Demystify</h4>
              <p className="text-muted-foreground leading-relaxed">
                We bring clarity to complex systems and modern technology through practical, accessible frameworks.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-3 text-accent uppercase tracking-wide">Design</h4>
              <p className="text-muted-foreground leading-relaxed">
                We build practical solutions that transform how you work—human-centered, intentional, sustainable.
              </p>
            </Card>
          </div>

          {/* Trust Statement */}
          <div className="bg-muted/30 p-10 rounded-xl text-center">
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Trusted by learners, professionals, and organizations across education, healthcare, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
