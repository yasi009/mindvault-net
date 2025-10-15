import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Approach & Philosophy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging technology and human potential through systematic design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Systems-First Thinking</h3>
              <p className="text-muted-foreground leading-relaxed">We specialise in creating Life Operating Systems. Structured frameworks that transform complexity into clarity. These digital ecosystems help individuals and organisations optimise their workflows, decision-making, and productivity.</p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Literacy & Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                From custom GPT development to AI-powered automation, I help clients harness artificial intelligence 
                as a practical tool for growth. My approach demystifies technology and makes it accessible for all skill levels.
              </p>
            </div>
          </div>

          <div className="bg-gradient-card p-10 rounded-xl shadow-elegant border border-border">
            <p className="text-2xl text-foreground font-medium text-center leading-relaxed">
              Trusted by students, professionals, and organizations across education, healthcare, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
