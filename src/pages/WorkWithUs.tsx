import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, AlertCircle, Compass, Hammer, Rocket, ArrowRight, Target, Users } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";

const WorkWithUs = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We start with a 15-minute clarity call to understand your challenges, goals, and current systems.",
      color: "text-accent"
    },
    {
      icon: AlertCircle,
      title: "Debunk",
      description: "We identify the inefficiencies, assumptions, and roadblocks that are holding you back.",
      color: "text-primary"
    },
    {
      icon: Compass,
      title: "Demystify",
      description: "Through workshops or consultation, we bring clarity to complex systems, AI tools, or leadership challenges.",
      color: "text-accent"
    },
    {
      icon: Hammer,
      title: "Design",
      description: "We build your Life OS—practical, actionable, and tailored to your specific needs. Values become habits, habits become goals.",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "We deploy your Life OS with optional training and support. The output: a clarity system that transforms how you work.",
      color: "text-accent"
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
            The MindVault Method
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven process to move from confusion to clarity, from overwhelm to intentional action.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Step {index + 1}</span>
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 w-0.5 h-12 bg-border mt-16 ml-7" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Two Pathways to Your Life OS</h2>
            <p className="text-xl text-muted-foreground">
              Choose the engagement that fits your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Clarity Consult (1–2 hrs)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discovery and diagnosis session to understand your challenges, map your current systems, and recommend the right Life OS approach for you.
              </p>
              <p className="text-sm text-accent font-medium">→ Recommended Life OS setup pathway</p>
            </Card>
            
            <Card className="p-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Workshop → Life OS (Teams/Educators)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Introduction to AI literacy and clarity frameworks for teams, followed by pilot deployment of Life OS playbooks tailored to your organization.
              </p>
              <p className="text-sm text-accent font-medium">→ Custom Life OS for groups</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Build Your Life OS?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Book a clarity session and discover how the Life OS can transform your workflow.
          </p>
          <Button size="lg" onClick={() => setConsultationOpen(true)}>
            Book Your Clarity Session
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <Footer />
    </div>
  );
};

export default WorkWithUs;
