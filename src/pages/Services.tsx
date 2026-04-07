import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Brain, Target, Workflow, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { useNavigate } from "react-router-dom";
import lifeOsDemo from "@/assets/life-os-demo.png";

const Services = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const navigate = useNavigate();

  const workshops = [
    {
      icon: Brain,
      title: "AI Literacy for Teams & Educators",
      description:
        "Practical workshops that demystify AI and empower your team to leverage it effectively without the overwhelm.",
    },
    {
      icon: Users,
      title: "Human-Centered Digital Transformation",
      description: "Navigate change with clarity. Build systems that enhance human capability rather than replace it.",
    },
    {
      icon: Shield,
      title: "Conscious Leadership & Clarity",
      description: "Develop self-awareness and strategic thinking to lead with confidence in complex environments.",
    },
  ];

  const consulting = [
    {
      icon: Target,
      title: "1:1 Executive Consultation",
      description:
        "1–2 hour deep-dive sessions to identify challenges, clarify strategy, and create actionable next steps.",
      duration: "1-2 hours",
    },
    {
      icon: Lightbulb,
      title: "Custom Tool Design",
      description: "Bespoke digital solutions for SMEs and educators—from Life OS templates to workflow automation.",
      duration: "Project-based",
    },
    {
      icon: Workflow,
      title: "AI Strategy & Workflow Audits",
      description: "Comprehensive analysis of your current systems with practical recommendations for optimization.",
      duration: "2-4 weeks",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Orange ribbon banner */}
      <div className="w-full bg-accent py-2 overflow-hidden">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="font-heading text-white italic text-sm md:text-base tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
          <p className="font-heading text-white italic text-sm md:text-base tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-soft overflow-hidden">
        {/* Gradient pink color blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-pink-300/35 via-pink-400/25 to-rose-300/15 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-20 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-pink-200/25 via-rose-300/20 to-fuchsia-200/15 rounded-full blur-[90px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          ></div>
        </div>

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-sm font-medium text-accent">Now Available</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic">
            MindVault Life OS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Your personal operating system for clarity and consistency.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn goals into actionable success systems through intelligent organization — regain control and make
            progress on what matters most.
          </p>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">See It In Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your personal dashboard: values, habits, goals, and reflections—all in one place.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-elegant border border-border">
            <img
              src={lifeOsDemo}
              alt="MindVault Life OS Dashboard Interface showing navigation sidebar with Dashboard, Workspace, Identity & Values, Habits Tracker, Goals, and Daily Reflection. Main area displays Quick Access section, Today's Intention, Clarity Score of 78, and Life Pillars tracking"
              className="w-full h-auto"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">Built in Notion • Powered by AI • Designed for clarity</p>
          </div>
        </div>
      </section>




      {/* How It Works - DDD */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The DDD Method: Debunk. Demystify. Design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-3">1</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Debunk</h3>
              <p className="text-muted-foreground">
                Diagnose friction. Identify what's not working and the mental bottlenecks holding you back.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-3">2</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Demystify</h3>
              <p className="text-muted-foreground">
                Show the model and tools. Learn the Life OS framework and how it connects to your goals.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-3">3</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Design</h3>
              <p className="text-muted-foreground">
                Deploy your Life OS. Build habits, goals, calendar, and review loops that stick.
              </p>
            </Card>
          </div>
        </div>
      </section>




      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <Footer />
    </div>
  );
};

export default Services;
