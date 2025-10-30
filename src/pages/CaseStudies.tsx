import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote, CheckCircle2, Target, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-8">
          {studies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Left Column - Client & Title */}
                <div className="bg-gradient-soft p-8 flex flex-col justify-between border-r border-border">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {study.client}
                    </Badge>
                    <h2 className="text-2xl font-bold text-foreground leading-tight">
                      {study.title.split(':')[1] || study.title}
                    </h2>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Workshop Focus</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Systems Thinking</Badge>
                      <Badge variant="outline" className="text-xs">AI Literacy</Badge>
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="p-8">
                  {/* Context, Approach, Outcome in compact grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-accent" />
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wider">
                          Context
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-4 h-4 text-accent" />
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wider">
                          Approach
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wider">
                          Outcome
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-accent/5 p-5 rounded-lg border-l-2 border-accent relative">
                    <Quote className="w-6 h-6 text-accent/30 absolute top-3 right-3" />
                    <p className="text-base text-foreground/90 italic leading-relaxed mb-2 pr-8">
                      "{study.testimonial}"
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground">
                      — {study.author}
                    </p>
                  </div>
                </div>
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
