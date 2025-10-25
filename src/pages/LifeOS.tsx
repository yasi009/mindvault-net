import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Brain, Target, Map, Calendar, Lightbulb, Users } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ToolSignupDialog } from "@/components/ToolSignupDialog";
import { Card } from "@/components/ui/card";

const LifeOS = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Identity & Values",
      description: "Personality/psychographics, code of ethics, and identity statements. Align actions to your self-concept.",
      details: ["MBTI/personality frameworks", "Personal code of ethics", "Identity declarations", "Values assessment"]
    },
    {
      icon: Target,
      title: "Habits & Goals (Relational)",
      description: "The chain that matters: values → identity → habits → multi-week goals.",
      details: ["Habit scheduling & tracking", "Goal horizons & success metrics", "Priority & status tracking", "Automated goal suggestions from audits"]
    },
    {
      icon: Map,
      title: "Learning Map",
      description: "Plan skill growth like a project. Track topics, modes, depth, mentors, and next sessions.",
      details: ["Skill & topic tracking", "Learning modes (course, book, mentor)", "Depth levels", "Next session planning"]
    },
    {
      icon: Lightbulb,
      title: "Reflections & Reviews",
      description: "Daily check-ins + weekly synthesis. Metacognition built-in with clarity scoring.",
      details: ["Daily reflection prompts", "Weekly synthesis reviews", "Clarity score tracking", "Wheel of Life audits"]
    },
    {
      icon: Calendar,
      title: "Calendar Bridge",
      description: "One unified schedule for habits, goals, and reviews. See today and this week at a glance.",
      details: ["Today view", "This week overview", "Habit scheduling", "Goal deadlines integrated"]
    },
    {
      icon: Users,
      title: "AI-Guided Onboarding",
      description: "Set up via conversation, not data entry. AI populates your system based on who you are.",
      details: ["Conversational setup flow", "MBTI/age/roles → values → identity → habits", "Automated audit → goal generation", "Plug-and-play templates"]
    }
  ];

  const whoItsFor = [
    "Students navigating academic & career decisions",
    "Career-changers seeking clarity in transition",
    "Entrepreneurs balancing growth & well-being",
    "Professionals managing overwhelm & multiple priorities"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Orange ribbon banner */}
      <div className="w-full bg-accent py-3 overflow-hidden">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="font-heading text-white italic text-base md:text-lg tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
          <p className="font-heading text-white italic text-base md:text-lg tracking-[0.3em] uppercase px-8">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary italic">
            Your Clarity System.<br />Powered by AI.<br />Built in Notion.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Turn goals into actionable success systems through intelligent organization — regain control and make progress on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setWaitlistOpen(true)}>
              Get Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
              Book a 15-min Fit Check
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic">Who It's For</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ambitious, overwhelmed, tech-curious people in transition seeking clarity and control.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {whoItsFor.map((audience, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground italic">What You Get</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete system to organize your life around what truly matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-4xl font-bold text-accent mb-3">1</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Debunk</h3>
              <p className="text-muted-foreground">Identify what's not working. Surface the real challenges and mental bottlenecks.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-3">2</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Demystify</h3>
              <p className="text-muted-foreground">Map systems and skills. Learn the Life OS framework and how it connects to your goals.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-3">3</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Design</h3>
              <p className="text-muted-foreground">Implement your OS. Build habits, goals, calendar, and review loops that stick.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" onClick={() => window.location.href = '/method'}>
              Learn More About DDD Method
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic">What to Expect</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Based on pilot user feedback, Life OS helps you:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">↑ Clarity</div>
              <p className="text-muted-foreground">Track your clarity score weekly and see progress.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">↑ Retention</div>
              <p className="text-muted-foreground">Stay engaged with your system through built-in reviews.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">↑ Action</div>
              <p className="text-muted-foreground">Turn values into daily habits and measurable goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Placeholder */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground italic">Get Started</h2>
            <p className="text-xl text-muted-foreground">Choose the package that fits your needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Core Life OS</h3>
              <p className="text-muted-foreground mb-6">The complete Notion template with all features.</p>
              <Button size="lg" className="w-full" onClick={() => setWaitlistOpen(true)}>
                Join Waitlist
              </Button>
            </Card>
            
            <Card className="p-8 text-center border-2 border-primary">
              <div className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Recommended</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Life OS + Onboarding</h3>
              <p className="text-muted-foreground mb-6">Template + 60-90 min guided setup call.</p>
              <Button size="lg" className="w-full" onClick={() => setWaitlistOpen(true)}>
                Join Waitlist
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Life OS + Coaching</h3>
              <p className="text-muted-foreground mb-6">Template + onboarding + 3 coaching sessions.</p>
              <Button size="lg" className="w-full" onClick={() => setWaitlistOpen(true)}>
                Join Waitlist
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground italic">FAQ</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">What's included in Life OS?</h3>
              <p className="text-muted-foreground">A complete Notion template with Identity & Values, Habits & Goals, Learning Map, Reflections, Calendar Bridge, and AI-guided onboarding templates.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Do I need Notion experience?</h3>
              <p className="text-muted-foreground">No. The AI-guided onboarding walks you through setup step-by-step. Basic familiarity with Notion is helpful but not required.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Who owns my data?</h3>
              <p className="text-muted-foreground">You do. Life OS lives in your own Notion workspace. All your data stays with you.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">How does AI onboarding work?</h3>
              <p className="text-muted-foreground">You complete a conversational flow that asks about your personality, roles, values, and goals. The system then pre-populates your Life OS with personalized content.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">How long does setup take?</h3>
              <p className="text-muted-foreground">AI onboarding takes 20-30 minutes. With a guided call, full setup is 60-90 minutes. You can always refine later.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">What's your refund policy?</h3>
              <p className="text-muted-foreground">We offer a 14-day money-back guarantee if Life OS isn't the right fit for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground italic">
            Ready to Transform Overwhelm into Clarity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the waitlist to be first in line when Life OS launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setWaitlistOpen(true)}>
              Get Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
              Book a Fit Check
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <ToolSignupDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
        toolName="MindVault Life OS" 
        delayedDelivery={true} 
      />
    </div>
  );
};

export default LifeOS;
