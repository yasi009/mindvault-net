import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Compass, Hammer, ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Method = () => {
  const navigate = useNavigate();

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
            The DDD Method
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Debunk. Demystify. Design.
            <br />
            Our proven framework for transforming overwhelm into intentional action.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground uppercase tracking-wide">
                1. Debunk
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Identify what's not working. Cut through assumptions and surface the real challenges.
              </p>
              <div className="text-left space-y-2 mt-6">
                <p className="text-sm font-medium text-foreground">What we do:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Capture current pains & bottlenecks</li>
                  <li>• Challenge assumptions</li>
                  <li>• Identify what's scattered vs. what works</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground uppercase tracking-wide">
                2. Demystify
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Understand the systems and tools. Bring clarity to complexity through practical frameworks.
              </p>
              <div className="text-left space-y-2 mt-6">
                <p className="text-sm font-medium text-foreground">What we do:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Map systems & skills</li>
                  <li>• Teach the framework</li>
                  <li>• Show how values connect to actions</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Hammer className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground uppercase tracking-wide">
                3. Design
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Build a practical solution. Create systems that work for you, not against you.
              </p>
              <div className="text-left space-y-2 mt-6">
                <p className="text-sm font-medium text-foreground">What we do:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Implement your OS</li>
                  <li>• Set up habits, goals & calendar</li>
                  <li>• Create review loops for sustainability</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Diagram Section */}
          <Card className="p-10 bg-gradient-card">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              The Values-to-Action Chain
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-primary">VALUES</span>
                </div>
                <p className="text-sm text-muted-foreground">What matters to you</p>
              </div>

              <ChevronDown className="w-8 h-8 text-accent rotate-0 md:-rotate-90" />

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-primary">IDENTITY</span>
                </div>
                <p className="text-sm text-muted-foreground">Who you are</p>
              </div>

              <ChevronDown className="w-8 h-8 text-accent rotate-0 md:-rotate-90" />

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-accent">HABITS</span>
                </div>
                <p className="text-sm text-muted-foreground">What you do daily</p>
              </div>

              <ChevronDown className="w-8 h-8 text-accent rotate-0 md:-rotate-90" />

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-accent">GOALS</span>
                </div>
                <p className="text-sm text-muted-foreground">What you achieve</p>
              </div>
            </div>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              This chain ensures every action you take is aligned with who you are and what you value—creating clarity, purpose, and sustainable progress.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Maps to Life OS */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              How DDD Powers Life OS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The method embedded in your daily workflow
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-accent" />
                Debunk → Setup & Audit
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                During onboarding, Life OS captures your current reality through the Wheel of Life audit. It identifies which areas feel scattered, which tools aren't working, and where you're experiencing overwhelm—creating an honest baseline.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                <Compass className="w-6 h-6 text-primary" />
                Demystify → Framework & Mapping
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Life OS teaches you the Values → Identity → Habits → Goals chain. You map your personality, values, and identity statements, then connect them to actionable systems. Everything becomes clear and interconnected.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                <Hammer className="w-6 h-6 text-accent" />
                Design → Daily Practice
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Once your OS is set up, you live in it daily. Track habits, review goals, log reflections, and see everything in one unified calendar. The system adapts to you, creating sustainable clarity and progress over time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Experience the DDD Method?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            See how Debunk, Demystify, and Design can transform your clarity and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/life-os')}>
              Get Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/workshops')}>
              Explore Workshops
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Method;
