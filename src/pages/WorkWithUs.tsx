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
    { title: "NDIS Workflow Transformation", description: "From messy case notes to streamlined AI workflow in healthcare", community: "Healthcare Provider" },
    { title: "AI Strategy Workshop", description: "Transforming AI confusion into confident digital adoption", community: "Makinex" },
    { title: "Empowerment Workshop", description: "Inspiring young women to design their futures with confidence", community: "Girls in Business (UNSW/NIDA)" },
    { title: "Design Thinking for Student Leaders", description: "Real-world problem-solving frameworks for changemakers", community: "Students" },
    { title: "AI Literacy for Digital Natives", description: "Understanding AI beyond the hype", community: "Students" },
    { title: "Life OS for Students", description: "Building systems that align values with daily habits", community: "Students" },
    { title: "AI in Pedagogy", description: "Transforming teaching with AI-assisted learning design", community: "Educators" },
    { title: "Systems Thinking for Curriculum Design", description: "Connecting learning outcomes to real-world systems", community: "Educators" },
    { title: "Digital Literacy Leadership", description: "Leading the charge in digital transformation", community: "Educators" },
    { title: "Demystifying AI for Business Leaders", description: "Understanding the four types of AI and integration pyramid", community: "Executives" },
    { title: "Laying Foundations for Scalable Intelligence", description: "Building architecture for AI scalability", community: "Executives" },
    { title: "Prompting for Impact", description: "Teaching teams to communicate effectively with AI tools", community: "Executives" },
    { title: "Toolminator: The Internal GPT Pilot", description: "Custom GPT trained on product data for internal enablement", community: "Executives" },
    { title: "Generative AI in the Flow of Work", description: "Streamlining documentation and communication with AI", community: "Executives" },
    { title: "From Fixes to ROI", description: "Turning AI experiments into measurable business value", community: "Executives" },
    { title: "The Future of Work: Human + AI Collaboration", description: "Exploring responsible AI in mid-sized enterprises", community: "Executives" },
  ];

  const testimonials = [
    { quote: "She designed a simple AI setup that now pulls all our notes into one place. It's made day-to-day management so much easier.", author: "South Coast Carers" },
    { quote: "She quickly taught most people in the organisation the best methods for using AI while developing a robust strategy for the business.", author: "CEO, Makinex" },
    { quote: "Her authenticity and purpose-driven approach inspired young women to design their futures with intention and lead boldly.", author: "UNSW Business School" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Transformation in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results through collaborative, systems-thinking workshops
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
                    <div className="inline-block bg-secondary/20 px-3 py-1 rounded-full mb-4">
                      <span className="text-sm text-secondary-foreground font-medium">{workshop.community}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{workshop.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{workshop.description}</p>
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
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              Helping leaders and learners <span className="text-accent">Debunk</span> confusion, <span className="text-accent">Demystify</span> AI, and <span className="text-accent">Design</span> systems that work.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center bg-card border-border">
                <div className="text-accent text-4xl font-bold mb-4">&ldquo;&rdquo;</div>
                <p className="text-foreground italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-muted-foreground text-sm font-medium">— {testimonial.author}</p>
              </Card>
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
