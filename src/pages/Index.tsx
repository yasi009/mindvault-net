import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ArrowRight, Check, Brain, Target, Lightbulb, Workflow, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";

const Index = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Sound Familiar */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            You're doing everything. And it's slowly breaking you.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 max-w-2xl">Sound familiar?</p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              "You're productive at work and exhausted everywhere else.",
              "Your calendar is full. Your energy isn't.",
              "You know what to do. You just can't seem to do it consistently.",
              "You've tried planners, apps, and routines. Nothing sticks.",
            ].map((text, i) => (
              <Card key={i} className="p-6 md:p-8 bg-card border-border hover:border-primary/30 transition-colors">
                <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-foreground">
            Your operating system, built around you
          </h2>
          <div className="space-y-12 md:space-y-16">
            {[
              {
                step: "01",
                title: "Discover your OS",
                desc: "A 20-minute AI onboarding maps your values, identity, and the areas of your life that need the most attention.",
              },
              {
                step: "02",
                title: "Run your days with intention",
                desc: "Your personalised dashboard, daily habits, and AI-powered reflection prompts — all connected to who you actually are.",
              },
              {
                step: "03",
                title: "Recalibrate as you grow",
                desc: "Weekly AI check-ins surface patterns, flag burnout signals, and keep your system aligned with your life.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 items-start">
                <span
                  className="font-heading text-4xl md:text-5xl font-bold shrink-0"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-foreground">Simple pricing</h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl">
            {/* Free */}
            <Card className="p-8 bg-card border-border flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-2">Get started</h3>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">Free</p>
              <p className="text-sm text-muted-foreground mb-6">No card required</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  AI onboarding
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Personalised dashboard
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => (window.location.href = "https://the-life-os.lovable.app/")}
              >
                Get started
              </Button>
            </Card>

            {/* Pro */}
            <Card className="p-8 border-2 border-accent bg-card flex flex-col relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Pro</h3>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                AUD 9.99<span className="text-base font-normal text-muted-foreground"> / month</span>
              </p>
              <p className="text-sm text-muted-foreground mb-6">Full operating system</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Identity tracking
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Daily habits
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  AI reflection prompts
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Weekly check-ins
                </li>
              </ul>
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => (window.location.href = "https://the-life-os.lovable.app/")}
              >
                Start your OS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-pink-300/30 via-rose-200/20 to-transparent rounded-full blur-[90px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">What's Inside</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete system to organize your life around what truly matters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Delivery Options */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Delivery Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the path that fits your needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Self-Setup + Guide</h3>
              <p className="text-muted-foreground mb-6">Get the Life OS template and AI-guided onboarding resources to set up on your own.</p>
              <Button size="lg" onClick={() => (window.location.href = "https://the-life-os.lovable.app/")}>
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Custom for Teams/Educators</h3>
              <p className="text-muted-foreground mb-6">Life OS adapted for teams, workshops, or educational institutions.</p>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-foreground">Pricing on request.</strong> We customize packages based on your needs and timeline.
            </p>
            <p className="text-sm text-muted-foreground mb-6">Typical delivery: 1–2 weeks. Includes 60-minute onboarding call for coaching options.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => (window.location.href = "https://the-life-os.lovable.app/")}>
                Get the Life OS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16 px-6 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xl font-heading font-semibold mb-2">
              TheMindVault<sup className="text-[0.5em] ml-0.5">™</sup>
            </p>
            <p className="text-sm text-background/60">Think clearly. Work intentionally. Live sustainably.</p>
          </div>
          <a href="https://the-life-os.lovable.app/" className="text-sm text-background/60 hover:text-background transition-colors">
            Login →
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
