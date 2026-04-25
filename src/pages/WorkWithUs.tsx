import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Presentation, Network } from "lucide-react";
import { useRef } from "react";

const WorkWithUs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const tracks = [
    {
      Icon: BookOpen,
      title: "Research & Writing",
      desc:
        "Co-authored content combining practitioner implementation experience with academic rigour — on AI governance, education deployment, and responsible AI.",
    },
    {
      Icon: Presentation,
      title: "Programme Delivery",
      desc:
        "Joint workshops where your subject-matter expertise and assessment lens complements MindVault's build experience — for HEIs, school groups, or corporate L&D.",
    },
    {
      Icon: Network,
      title: "Network",
      desc:
        "Institutions you know who need implementation support; frameworks you've developed that MindVault can operationalise. Two-way referrals.",
    },
  ];

  const pastWorkshops = [
    { title: "NDIS Workflow Transformation", description: "From messy case notes to streamlined AI workflow in healthcare", community: "Healthcare Provider" },
    { title: "AI Strategy Workshop", description: "Transforming AI confusion into confident digital adoption", community: "Makinex" },
    { title: "Empowerment Workshop", description: "Inspiring young women to design their futures with confidence", community: "Girls in Business (UNSW/NIDA)" },
    { title: "Design Thinking for Student Leaders", description: "Real-world problem-solving frameworks for changemakers", community: "Students" },
    { title: "AI Literacy for Digital Natives", description: "Understanding AI beyond the hype", community: "Students" },
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

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Partner With Us
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three ways academics, consultants, and institutional partners can collaborate with MindVault on responsible AI in education.
          </p>
        </div>
      </section>

      {/* Partnership tracks */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {tracks.map(({ Icon, title, desc }, i) => (
              <Card key={i} className="p-6 md:p-8 hover:shadow-elegant transition-shadow h-full">
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              What collaborators and clients have said.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-8 text-center bg-card border-border">
                <div className="text-accent text-4xl font-bold mb-4">&ldquo;&rdquo;</div>
                <p className="text-foreground italic mb-4 leading-relaxed">"{t.quote}"</p>
                <p className="text-muted-foreground text-sm font-medium">— {t.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-20 px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Transformation in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of workshops across healthcare, education, and enterprise.
            </p>
          </div>
          <div className="relative">
            <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors shadow-sm">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-10 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
            <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors shadow-sm">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Interested in partnering?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Tell us where your work overlaps with ours — research, delivery, or network — and we'll take it from there.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkWithUs;
