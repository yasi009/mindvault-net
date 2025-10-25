import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  BookOpen, 
  MessageSquare, 
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ToolSignupDialog } from "@/components/ToolSignupDialog";

const LifeOS = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Identity & Values",
      description: "Define who you are through personality assessments, psychographics, and your personal Code of Ethics. Align all actions to your core self-concept.",
      details: ["Personality/Psychographics mapping", "Code of Ethics framework", "Identity statements & declarations"]
    },
    {
      icon: Target,
      title: "Habits & Goals (Relational)",
      description: "Build a chain from values → identity → habits → multi-week goals. Track priority, status, success metrics, and scheduling—all interconnected.",
      details: ["Values-to-action chain", "Horizon, priority & status tracking", "Habit scheduling & goal metrics"]
    },
    {
      icon: BookOpen,
      title: "Learning Map",
      description: "Organize skill development like a project. Track topics, learning modes, depth levels, mentors, and session planning.",
      details: ["Skill/topic organization", "Learning mode & depth tracking", "Mentor connections & scheduling"]
    },
    {
      icon: MessageSquare,
      title: "Reflections & Reviews",
      description: "Daily check-ins and weekly synthesis with built-in clarity scoring. Wheel of Life audits automatically suggest goals and habits for low-scoring areas.",
      details: ["Daily & weekly reflection rituals", "Clarity score tracking", "Auto-suggested improvements from audits"]
    },
    {
      icon: Calendar,
      title: "Calendar Bridge",
      description: "One unified schedule for habits, goals, and reviews. See today's priorities and this week's commitments at a glance.",
      details: ["Unified scheduling system", "Today/This Week views", "Automatic habit & goal integration"]
    },
    {
      icon: Sparkles,
      title: "AI-Guided Onboarding",
      description: "Set up your Life OS through conversation, not data entry. AI guides you from personality assessment through values, identity, habits, and initial goals.",
      details: ["Conversational setup flow", "MBTI/age/roles → values → identity", "Auto-populated habits & goals from audit"]
    }
  ];

  const whoItsFor = [
    "Students navigating academic overwhelm and future planning",
    "Career-changers seeking clarity during transitions",
    "Entrepreneurs building sustainable personal systems",
    "Ambitious professionals juggling multiple priorities",
    "Anyone feeling overwhelmed by too many tools and scattered goals"
  ];

  const outcomes = [
    "Clarity score improvement through consistent reflection",
    "Actionable goals aligned with core values",
    "Sustainable habits tracked and reviewed",
    "Reduced mental clutter from unified system",
    "Progress visibility across all life areas"
  ];

  const faqs = [
    {
      q: "What's included in Life OS?",
      a: "Complete Notion template with Identity & Values, Habits & Goals, Learning Map, Reflections system, Calendar integration, and AI-guided onboarding flow."
    },
    {
      q: "Do I need Notion?",
      a: "Yes, Life OS is built natively in Notion. You'll need a free or paid Notion account to use it."
    },
    {
      q: "Who owns my data?",
      a: "You do. Everything lives in your personal Notion workspace. We don't access or store your data."
    },
    {
      q: "Is AI required? What about privacy?",
      a: "AI-guided onboarding is optional. If used, it processes data only during setup to help populate your system—no ongoing data collection."
    },
    {
      q: "How long does setup take?",
      a: "With AI-guided onboarding: 30-60 minutes. Manual setup: 2-3 hours. You can pause and return anytime."
    },
    {
      q: "What if it doesn't work for me?",
      a: "We offer a 14-day satisfaction guarantee. If Life OS isn't the right fit, contact us for a full refund."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Marquee Banner */}
      <div className="w-full bg-accent py-2 overflow-hidden">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="font-heading text-white italic text-sm md:text-base tracking-[0.3em] uppercase px-6">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
          <p className="font-heading text-white italic text-sm md:text-base tracking-[0.3em] uppercase px-6">
            DEBUNK. DEMYSTIFY. DESIGN. ✧ DEBUNK. DEMYSTIFY. DESIGN. ✧
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Notion-Native • AI-Guided • Metacognition Built-In</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight italic uppercase leading-tight">
            Your Clarity System.
            <br />
            Powered by AI.
            <br />
            Built in Notion.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Turn goals into actionable success systems through intelligent organization—regain control and make progress on what matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={() => setWaitlistOpen(true)}>
              Get Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
              Book a Fit Check
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Join 500+ ambitious learners building clarity systems
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Who It's For</h2>
            <p className="text-lg text-muted-foreground">
              Built for ambitious, overwhelmed, tech-curious people in transition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whoItsFor.map((audience, index) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{audience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">What You Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete system to organize goals, habits, learning, and reflections around your identity and values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Inline */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">The DDD Method</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven framework for building clarity that sticks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground uppercase">Debunk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Capture your current pains and bottlenecks. Identify what's scattered, what's working, and what's holding you back.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground uppercase">Demystify</h3>
              <p className="text-muted-foreground leading-relaxed">
                Map your systems and skills. Learn the Life OS framework and how to connect values to daily actions.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground uppercase">Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implement your OS with habits, goals, calendar integration, and review loops. Make it sustainable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Expected Outcomes</h2>
            <p className="text-lg text-muted-foreground">
              Based on pilot targets from our MVP success metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{outcome}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground">
              Start with the core system or add personalized support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Core Life OS</h3>
              <p className="text-muted-foreground mb-6">Complete Notion template with AI-guided setup</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$97</span>
                <span className="text-muted-foreground"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full Life OS template</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI-guided onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Video tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Template library access</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" onClick={() => setWaitlistOpen(true)}>
                Get Started
              </Button>
            </Card>

            <Card className="p-8 border-accent border-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Life OS + Onboarding</h3>
              <p className="text-muted-foreground mb-6">Template plus 90-min personalized setup call</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$297</span>
                <span className="text-muted-foreground"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Core</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">90-min 1:1 setup session</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Personalized values mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom habit/goal setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 weeks follow-up support</span>
                </li>
              </ul>
              <Button className="w-full" onClick={() => setWaitlistOpen(true)}>
                Get Started
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Life OS + Coaching</h3>
              <p className="text-muted-foreground mb-6">Template plus 3 coaching sessions</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$597</span>
                <span className="text-muted-foreground"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3x 60-min coaching sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Clarity & accountability support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Weekly reflection reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">30-day follow-up access</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" onClick={() => setWaitlistOpen(true)}>
                Get Started
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Add-on: Executive/Founder Consultation (1-2 hours) — Custom pricing
            </p>
            <Button variant="ghost" onClick={() => setConsultationOpen(true)}>
              Discuss Custom Needs
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Build Your Clarity System?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join ambitious learners turning overwhelm into intentional progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setWaitlistOpen(true)}>
              Get Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setWaitlistOpen(true)}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      <ConsultationDialog 
        open={consultationOpen} 
        onOpenChange={setConsultationOpen}
      />
      
      <ToolSignupDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen}
        toolName="MindVault Life OS"
        delayedDelivery={false}
      />
      
      <Footer />
    </div>
  );
};

export default LifeOS;
