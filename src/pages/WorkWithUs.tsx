import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle, Compass, Hammer, Rocket, ArrowRight } from "lucide-react";
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
      description: "We build a custom plan or tool tailored to your specific needs—practical, actionable, and human-centered.",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "We integrate the solution with optional training and ongoing support to ensure lasting transformation.",
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Book a clarity session and discover how we can help you think clearly, work intentionally, and lead confidently.
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
