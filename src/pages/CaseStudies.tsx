import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      title: "NDIS Workflow Transformation",
      client: "Healthcare Provider",
      challenge: "Managing case notes from multiple carers in different formats was creating major admin bottlenecks and making it hard to maintain consistency and compliance across client records.",
      solution: "Mapped and designed an AI-assisted workflow that automatically collects and structures case notes, integrates with Xero for record-keeping, and generates real-time client summaries—simplifying documentation and compliance tracking.",
      result: "Streamlined data flow, reduced manual admin workload, and improved visibility across client care — enabling faster decision-making and higher-quality service delivery.",
      testimonial: "Working with Yaseerah was a game-changer. I showed her my frustrations with a messy system of carers sending case notes in every format and within an hour she'd mapped out a solution that actually made sense. She designed a simple AI setup that now pulls all our notes into one place and gives us clean client summaries without all the manual admin. It's made day-to-day management so much easier.",
      author: "South Coast Carers, Business Owner"
    },
    {
      title: "AI Integration Strategy",
      client: "Makinex (Innovative Solutions)",
      challenge: "The leadership team wanted to explore AI adoption but faced overwhelming, disconnected systems, low digital confidence, and no clear data foundations. Tools and processes were fragmented across platforms, making it difficult to see where AI could add real value.",
      solution: "Led a strategic discovery and education process — conducting AI literacy sessions, mapping current workflows, and identifying readiness gaps. Designed a phased roadmap that focused first on building solid digital systems and data flow before layering in responsible AI use cases.",
      result: "Shifted the team's mindset from overwhelm to clarity, established strong digital foundations, and created a realistic, human-centred AI integration plan aligned with long-term transformation goals.",
      testimonial: "Yasi came to Markinex to investigate AI and our digital transformation for AI. She quickly taught most people in the organisation the best methods for using AI, how it works and some basics while developing a more robust strategy for the business as a whole",
      author: "CEO Rory Kennard"
    },
    {
      title: "Educational AI Workshop Series",
      client: "University Educators (UNSW)",
      challenge: "Faculty overwhelmed by AI developments and uncertain how to integrate it into teaching ethically.",
      solution: "Delivered hands-on workshops covering AI literacy, practical applications, and ethical frameworks for education.",
      result: "85% of participants reported increased confidence in using AI tools; 3 new AI-enhanced courses launched.",
      testimonial: "Yaseerah made AI accessible and relevant. Her approach is practical, ethical, and genuinely empowering.",
      author: "Senior Lecturer, UNSW"
    },
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
            Transformation in Action
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from organizations that chose clarity over complexity.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto space-y-12">
          {studies.map((study, index) => (
            <Card key={index} className="p-8 md:p-10 bg-card border-border">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                  {study.client}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {study.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Challenge
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Solution
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Result
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.result}
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                <Quote className="w-8 h-8 text-accent mb-3" />
                <p className="text-lg text-foreground italic mb-3 leading-relaxed">
                  "{study.testimonial}"
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  — {study.author}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
