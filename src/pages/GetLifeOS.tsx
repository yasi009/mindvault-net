import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Brain, Target, Workflow, Shield, ArrowRight, BookOpen, Calendar } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { useNavigate } from "react-router-dom";
import { ProblemPromiseSection } from "@/components/ProblemPromiseSection";
import lifeOsDemo from "@/assets/life-os-demo.png";

const GetLifeOS = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const navigate = useNavigate();

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

      {/* Problem/Promise Section */}
      <ProblemPromiseSection />

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

      {/* What's Inside Section */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-pink-300/30 via-rose-200/20 to-transparent rounded-full blur-[90px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">What's Inside</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete system to organize your life around what truly matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Identity & Values</h3>
              <p className="text-muted-foreground leading-relaxed">Decide who you are; design how you live.</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Habits ↔ Goals</h3>
              <p className="text-muted-foreground leading-relaxed">Actions that serve your higher-purpose goals.</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <BookOpen className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Learning Map</h3>
              <p className="text-muted-foreground leading-relaxed">Plan skill growth like a project.</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reflections & Reviews</h3>
              <p className="text-muted-foreground leading-relaxed">Metacognition built-in.</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Brain className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Guided Onboarding</h3>
              <p className="text-muted-foreground leading-relaxed">Set up via conversation, not data entry.</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Calendar Bridge</h3>
              <p className="text-muted-foreground leading-relaxed">One schedule for habits, goals & reviews.</p>
            </Card>
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

      {/* Delivery Options */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Delivery Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the path that fits your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Self-Setup + Guide</h3>
              <p className="text-muted-foreground mb-6">
                Get the Life OS template and AI-guided onboarding resources to set up on your own.
              </p>
              <Button size="lg" onClick={() => (window.open("https://the-life-os.lovable.app/", "_blank"))}>
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>

            <Card className="p-8 text-center border-2 border-primary">
              <div className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Recommended</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Setup + 1-Hour Coaching</h3>
              <p className="text-muted-foreground mb-6">
                Template plus a 60-minute guided setup call to get you running fast.
              </p>
              <Button size="lg" onClick={() => setConsultationOpen(true)}>
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Custom for Teams/Educators</h3>
              <p className="text-muted-foreground mb-6">
                Life OS adapted for teams, workshops, or educational institutions.
              </p>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-foreground">Pricing on request.</strong> We customize packages based on your needs
              and timeline.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Typical delivery: 1–2 weeks. Includes 60-minute onboarding call for coaching options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => (window.open("https://the-life-os.lovable.app/", "_blank"))}>
                Get the Life OS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground italic">
            In the Meantime: Book a Chat or Workshop
          </h2>
          <div className="inline-block px-6 py-3 bg-accent/10 rounded-full mb-6">
            <span className="text-lg font-medium text-accent">Life OS is here</span>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the Debunk, Demystify, Design framework in person and start your clarity journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://www.isra.org.au/events/debunk-demystify-design/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Workshop Tickets
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <Footer />
    </div>
  );
};

export default GetLifeOS;
