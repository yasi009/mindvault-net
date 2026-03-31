import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, AlertCircle, Compass, Hammer, Rocket, ArrowRight, Target, Users, Briefcase, Sparkles, Code, Lightbulb, Building2, MessageSquare, Wrench, Workflow, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";

const WorkWithUs = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const pastWorkshops = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "Demystifying AI for Business Leaders", community: "Business Leaders" },
    { icon: <Building2 className="w-8 h-8" />, title: "Laying the Foundations for Scalable Intelligence", community: "Department Heads" },
    { icon: <MessageSquare className="w-8 h-8" />, title: "Prompting for Impact: How to Talk to AI Tools", community: "All Staff" },
    { icon: <Target className="w-8 h-8" />, title: "From Chaos to Clarity: Building AI Infrastructure", community: "Leadership" },
    { icon: <Wrench className="w-8 h-8" />, title: "Toolminator: The Internal GPT Pilot", community: "Product Teams" },
    { icon: <Workflow className="w-8 h-8" />, title: "Generative AI in the Flow of Work", community: "Business Leaders" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "From Fixes to ROI: Turning Experiments into Value", community: "Leadership" },
    { icon: <Rocket className="w-8 h-8" />, title: "The Future of Work: Human + AI Collaboration", community: "C-Suite" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Girls in STEM (NIDA Theatre)", community: "Yeah the Girls" },
    { icon: <Code className="w-8 h-8" />, title: "Custom GPT Development for Teachers", community: "Teaching Innovators" },
  ];

  const testimonials = [
    { quote: "This saved us hours every week. The ROI was immediate.", author: "CEO, Healthcare" },
    { quote: "You gave me energy to see change differently.", author: "Executive coaching client" },
    { quote: "Finally, someone who understands both strategy and implementation.", author: "Operations Director" },
    { quote: "You made me feel like I could actually do this. I'm not scared anymore.", author: "High School Student" },
    { quote: "This changed how I organize my entire student life.", author: "High school student" },
  ];
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

      {/* How We Work Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 3-step process to transform overwhelm into intentional action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-3">1</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Debunk</h3>
              <p className="text-muted-foreground">Identify what's not working. Cut through assumptions and surface the real challenges.</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-3">2</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Demystify</h3>
              <p className="text-muted-foreground">Understand the systems and tools. Bring clarity to complexity through practical frameworks.</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-3">3</div>
              <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-wide">Design</h3>
              <p className="text-muted-foreground">Build a practical solution. Create systems that work for you, not against you.</p>
            </Card>
          </div>
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


      {/* Past Workshops */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Past Workshops</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programs delivered across industries and audiences
            </p>
          </div>

          <div className="relative">
            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors shadow-sm">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-10 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {pastWorkshops.map((workshop, index) => (
                <Card key={index} className="min-w-[300px] flex-shrink-0 group hover:scale-105 transition-all duration-300 bg-card border-border">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4">{workshop.icon}</div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">{workshop.title}</h3>
                    <div className="inline-block bg-secondary/20 px-3 py-1 rounded-full">
                      <span className="text-sm text-secondary-foreground font-medium">{workshop.community}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors shadow-sm">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {testimonials
              .sort((a, b) => a.quote.length - b.quote.length)
              .map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="text-primary-foreground/90 font-heading italic text-center"
                  style={{ fontSize: `${1.3 + index * 0.2}rem` }}
                >
                  "{testimonial.quote}"
                  <footer className="text-primary-foreground/60 text-base mt-2 not-italic font-heading">— {testimonial.author}</footer>
                </blockquote>
              ))}
          </div>
        </div>
      </section>


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
