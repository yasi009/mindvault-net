import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { useNavigate } from "react-router-dom";

const Workshops = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const navigate = useNavigate();

  const workshops = [
    {
      icon: Brain,
      title: "AI Literacy for Teams & Educators",
      description: "Practical workshops that demystify AI and empower your team to leverage it effectively without the overwhelm.",
      duration: "Half-day or Full-day",
      outcomes: [
        "Clear understanding of AI capabilities & limitations",
        "Practical tools for daily workflow integration",
        "Confidence to experiment responsibly",
        "Reduced fear and increased strategic thinking"
      ]
    },
    {
      icon: Users,
      title: "Human-Centered Digital Transformation",
      description: "Navigate change with clarity. Build systems that enhance human capability rather than replace it.",
      duration: "Full-day or 2-day intensive",
      outcomes: [
        "Map current digital landscape and gaps",
        "Design human-first transformation roadmap",
        "Build team buy-in and reduce resistance",
        "Create sustainable change practices"
      ]
    },
    {
      icon: Shield,
      title: "Conscious Leadership & Clarity",
      description: "Develop self-awareness and strategic thinking to lead with confidence in complex environments.",
      duration: "Half-day keynote or 1-day workshop",
      outcomes: [
        "Enhanced self-awareness and decision-making",
        "Tools for navigating uncertainty",
        "Clarity frameworks for strategic thinking",
        "Stronger leadership presence and purpose"
      ]
    }
  ];

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
            Workshops & Keynotes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build clarity at scale. Transform how your team thinks about AI, systems, and leadership.
          </p>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive sessions designed to create lasting transformation
            </p>
          </div>

          <div className="space-y-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="p-8 md:p-10 hover:shadow-elegant transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                      <workshop.icon className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                        {workshop.title}
                      </h3>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-4 py-1 rounded-full whitespace-nowrap self-start">
                        {workshop.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {workshop.description}
                    </p>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Key Outcomes:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {workshop.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell Life OS */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card className="p-10 bg-gradient-card border-accent">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Give Participants a System That Sticks
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Add MindVault Life OS as a take-home system for workshop participants. They'll leave with practical tools to implement what they learned.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/life-os')}>
                  Learn About Life OS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
                  Discuss Bulk Licensing
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies Link */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            See how our workshops have transformed teams across education, healthcare, and technology sectors.
          </p>
          <Button size="lg" onClick={() => navigate('/case-studies')}>
            View Workshop Results
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Book a Workshop?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss your team's needs and design a session that creates lasting clarity.
          </p>
          <Button size="lg" onClick={() => setConsultationOpen(true)}>
            Enquire for Booking
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <Footer />
    </div>
  );
};

export default Workshops;
