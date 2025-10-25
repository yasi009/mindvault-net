import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, BookOpen, MessageSquare, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const socialProof = [
    { text: "Transformed our AI strategy from overwhelm to clarity", source: "Makinex CEO" },
    { text: "Created space where young women felt empowered to design their futures", source: "UNSW Business School" },
    { text: "Made day-to-day management so much easier", source: "South Coast Carers" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Identity & Values",
      description: "Decide who you are; design how you live."
    },
    {
      icon: Target,
      title: "Habits ↔ Goals",
      description: "Actions that serve your higher-purpose goals."
    },
    {
      icon: BookOpen,
      title: "Learning Map",
      description: "Plan skill growth like a project."
    },
    {
      icon: MessageSquare,
      title: "Reflections & Reviews",
      description: "Metacognition built-in."
    }
  ];

  const painPoints = [
    "Mental clutter from too many disconnected tools",
    "Inconsistent habits that don't align with goals",
    "Lack of clarity on what actually matters"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Social Proof Strip */}
      <section className="py-12 px-6 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {socialProof.map((proof, index) => (
              <div key={index} className="text-center">
                <p className="text-sm italic text-muted-foreground mb-2">"{proof.text}"</p>
                <p className="text-xs font-medium text-accent">— {proof.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Promise */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Feeling Overwhelmed?
              </h2>
              <div className="space-y-4 mb-6">
                {painPoints.map((pain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent text-sm">✗</span>
                    </div>
                    <p className="text-lg text-muted-foreground">{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-card border-accent">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Clarity That Sticks
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transform overwhelm into intentional action with a system that connects:
              </p>
              <div className="flex flex-col items-center gap-2 text-lg font-medium text-primary mb-6">
                <span>Values</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
                <span>Identity</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
                <span>Habits</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
                <span>Goals</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every action aligned with who you are and what you value.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Teasers */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Introducing MindVault Life OS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              An AI-guided personal clarity system built in Notion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow">
                <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border max-w-2xl mx-auto mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">AI-Guided Onboarding</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Set up via conversation, not data entry. Your Life OS configures itself based on your values, personality, and goals.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Notion-Native</span>
              <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">AI-Assisted</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Metacognition Built-In</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/life-os')}>
              Get Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/method')}>
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;