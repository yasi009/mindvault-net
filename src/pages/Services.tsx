import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Brain, Target, Workflow, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const navigate = useNavigate();

  const workshops = [
    {
      icon: Brain,
      title: "AI Literacy for Teams & Educators",
      description: "Practical workshops that demystify AI and empower your team to leverage it effectively without the overwhelm."
    },
    {
      icon: Users,
      title: "Human-Centered Digital Transformation",
      description: "Navigate change with clarity. Build systems that enhance human capability rather than replace it."
    },
    {
      icon: Shield,
      title: "Conscious Leadership & Clarity",
      description: "Develop self-awareness and strategic thinking to lead with confidence in complex environments."
    }
  ];

  const consulting = [
    {
      icon: Target,
      title: "1:1 Executive Consultation",
      description: "1–2 hour deep-dive sessions to identify challenges, clarify strategy, and create actionable next steps.",
      duration: "1-2 hours"
    },
    {
      icon: Lightbulb,
      title: "Custom Tool Design",
      description: "Bespoke digital solutions for SMEs and educators—from Life OS templates to workflow automation.",
      duration: "Project-based"
    },
    {
      icon: Workflow,
      title: "AI Strategy & Workflow Audits",
      description: "Comprehensive analysis of your current systems with practical recommendations for optimization.",
      duration: "2-4 weeks"
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
            Debunk. Demystify. Design.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform confusion into clarity through workshops, consulting, and custom solutions.
          </p>
        </div>
      </section>

      {/* Workshops & Keynotes Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Workshops & Keynotes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Build Clarity at Scale</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive sessions that transform how your team thinks about AI, systems, and leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                <workshop.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{workshop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{workshop.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate('/case-studies')}>
              View Workshop Results
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consulting & Custom Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Consulting & Custom Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Tailored Transformation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One-on-one support and bespoke solutions designed around your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {consulting.map((service, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="text-sm text-accent font-medium">{service.duration}</div>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border max-w-3xl mx-auto">
            <p className="text-center text-lg text-muted-foreground mb-4">
              <strong className="text-foreground">The MindVault Method:</strong> We Debunk inefficiencies. We Demystify complexity. We Design practical solutions.
            </p>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Pricing customized per project scope and workload.
            </p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => setConsultationOpen(true)}>
                Book Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <Footer />
    </div>
  );
};

export default Services;
