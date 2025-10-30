import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      title: "Healthcare Provider: NDIS Workflow Transformation Workshop",
      client: "Healthcare Provider",
      challenge: "The care team was overwhelmed by inconsistent case notes coming from multiple carers in different formats, causing admin delays and compliance challenges.",
      solution: "Facilitated a hands-on workshop with key team members, guiding them through mapping their current case note processes and co-designing an AI-assisted workflow. Together, we explored integrating automation to structure notes, link records in Xero, and create client summaries in real time. This method applied the Life OS systems-thinking framework connecting values to daily habits and goals.",
      result: "The team gained ownership of the new streamlined workflow, significantly reducing manual admin time and enhancing care consistency.",
      testimonial: "Yaseerah's workshop was eye-opening—I didn't realize how messy our system was until we mapped it out together. The AI tools we designed together are making my workday easier and more organized.",
      author: "Care Team Member"
    },
    {
      title: "Makinex (Innovative Solutions): AI Strategy & Literacy Workshop",
      client: "Makinex (Innovative Solutions)",
      challenge: "The leadership and staff were unsure how AI could fit into their fragmented digital ecosystem and lacked confidence in adopting new tech.",
      solution: "Delivered a series of interactive AI literacy sessions where participants learned AI basics, examined existing workflows, and identified digital readiness gaps. We then collaborated to design a phased AI integration roadmap grounded in the DDD framework — Debunk inefficiencies, Demystify AI, Design a practical plan.",
      result: "The team left with strengthened digital foundations and a clear, human-centered strategy for responsible AI adoption.",
      testimonial: "The workshop helped us take AI from a confusing buzzword to a practical tool. We all felt more confident and ready to transform our business.",
      author: "Workshop Participant"
    },
    {
      title: "Girls in Business (UNSW/NIDA): Empowerment & Digital Literacy Workshop",
      client: "Girls in Business (UNSW/NIDA)",
      challenge: "High school girls attending were navigating social stereotypes and feeling uncertain about their futures in technology-driven fields.",
      solution: "Co-delivered a dynamic, storytelling-based workshop including candid talks and live exercises where participants unpacked identity and confidence around AI. We introduced Life OS frameworks for intentional future planning, engaging everyone in conversations about their digital empowerment.",
      result: "The workshop inspired hundreds of young women to rethink their potential and approach their futures with clarity and courage.",
      testimonial: "Yasi's workshop was one of the most empowering I attended. It was honest, brave, and gave me tools to believe in myself and lead in a tech world.",
      author: "Workshop Participant"
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
            Real results through collaborative, systems-thinking workshops.
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
                    Context
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Workshop Approach
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Outcome
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
