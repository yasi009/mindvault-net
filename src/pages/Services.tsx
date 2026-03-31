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
          <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-pink-300/35 via-pink-400/25 to-rose-300/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-pink-200/25 via-rose-300/20 to-fuchsia-200/15 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-sm font-medium text-accent">Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic">
            MindVault Life OS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Your personal operating system for clarity and consistency.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn goals into actionable success systems through intelligent organization — regain control and make progress on what matters most.
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
            <p className="text-sm text-muted-foreground mb-4">
              Built in Notion • Powered by AI • Designed for clarity
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        {/* Subtle pink gradient blob */}
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-pink-300/30 via-rose-200/20 to-transparent rounded-full blur-[90px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">What You Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete system to organize your life around what truly matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Brain className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Guided Onboarding</h3>
              <p className="text-muted-foreground leading-relaxed">Profile, values, identity mapping, and automated audits to jumpstart your system.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Linked Habits & Goals</h3>
              <p className="text-muted-foreground leading-relaxed">Relational system with success metrics, horizons, and priority tracking.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Lightbulb className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Daily Reflections & Reviews</h3>
              <p className="text-muted-foreground leading-relaxed">Built-in metacognition with clarity score tracking and weekly synthesis.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Workflow className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Calendar Bridge</h3>
              <p className="text-muted-foreground leading-relaxed">See your week at a glance: habits, goals, and reviews in one unified view.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Ready-to-Use Notion Templates</h3>
              <p className="text-muted-foreground leading-relaxed">Pre-built templates for goals, daily check-ins, and plug-and-play setup.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Identity & Values Framework</h3>
              <p className="text-muted-foreground leading-relaxed">Personality mapping, code of ethics, and identity statements to align actions with who you are.</p>
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
              <p className="text-muted-foreground">Diagnose friction. Identify what's not working and the mental bottlenecks holding you back.</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-3">2</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Demystify</h3>
              <p className="text-muted-foreground">Show the model and tools. Learn the Life OS framework and how it connects to your goals.</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-3">3</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Design</h3>
              <p className="text-muted-foreground">Deploy your Life OS. Build habits, goals, calendar, and review loops that stick.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Delivery Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the path that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Self-Setup + Guide</h3>
              <p className="text-muted-foreground mb-6">Get the Life OS template and AI-guided onboarding resources to set up on your own.</p>
              <Button size="lg" asChild>
                <a href="https://mindvault-life-os.lovable.app" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </Card>
            
            <Card className="p-8 text-center border-2 border-primary">
              <div className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Recommended</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Setup + 1-Hour Coaching</h3>
              <p className="text-muted-foreground mb-6">Template plus a 60-minute guided setup call to get you running fast.</p>
              <Button size="lg" onClick={() => setConsultationOpen(true)}>
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Custom for Teams/Educators</h3>
              <p className="text-muted-foreground mb-6">Life OS adapted for teams, workshops, or educational institutions.</p>
              <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-foreground">Pricing on request.</strong> We customize packages based on your needs and timeline.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Typical delivery: 1–2 weeks. Includes 60-minute onboarding call for coaching options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://mindvault-life-os.lovable.app" target="_blank" rel="noopener noreferrer">
                  Get the Life OS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
                Book a Consultation
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
