import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote, ArrowRight, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CaseStudyTabs = () => {
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  const studies = [
    {
      id: "healthcare",
      client: "Healthcare Provider",
      tabTitle: "NDIS Workflow Transformation",
      teaser: "From messy case notes to streamlined AI workflow in healthcare",
      challenge: "The care team was overwhelmed by inconsistent case notes coming from multiple carers in different formats, causing admin delays and compliance challenges.",
      solution: "Facilitated a hands-on workshop with key team members, guiding them through mapping their current case note processes and co-designing an AI-assisted workflow. Together, we explored integrating automation to structure notes, link records in Xero, and create client summaries in real time. This method applied the Life OS systems-thinking framework connecting values to daily habits and goals.",
      result: "The team gained ownership of the new streamlined workflow, significantly reducing manual admin time and enhancing care consistency.",
      testimonial: "Yaseerah's workshop was eye-opening—I didn't realize how messy our system was until we mapped it out together. The AI tools we designed together are making my workday easier and more organized.",
      author: "Care Team Member"
    },
    {
      id: "makinex",
      client: "Makinex",
      tabTitle: "AI Strategy Workshop",
      teaser: "Transforming AI confusion into confident digital adoption",
      challenge: "The leadership and staff were unsure how AI could fit into their fragmented digital ecosystem and lacked confidence in adopting new tech.",
      solution: "Delivered a series of interactive AI literacy sessions where participants learned AI basics, examined existing workflows, and identified digital readiness gaps. We then collaborated to design a phased AI integration roadmap grounded in the DDD framework — Debunk inefficiencies, Demystify AI, Design a practical plan.",
      result: "The team left with strengthened digital foundations and a clear, human-centered strategy for responsible AI adoption.",
      testimonial: "The workshop helped us take AI from a confusing buzzword to a practical tool. We all felt more confident and ready to transform our business.",
      author: "Workshop Participant"
    },
    {
      id: "girlsinbusiness",
      client: "Girls in Business (UNSW/NIDA)",
      tabTitle: "Empowerment Workshop",
      teaser: "Inspiring young women to design their futures with confidence",
      challenge: "High school girls attending were navigating social stereotypes and feeling uncertain about their futures in technology-driven fields.",
      solution: "Co-delivered a dynamic, storytelling-based workshop including candid talks and live exercises where participants unpacked identity and confidence around AI. We introduced Life OS frameworks for intentional future planning, engaging everyone in conversations about their digital empowerment.",
      result: "The workshop inspired hundreds of young women to rethink their potential and approach their futures with clarity and courage.",
      testimonial: "Yasi's workshop was one of the most empowering I attended. It was honest, brave, and gave me tools to believe in myself and lead in a tech world.",
      author: "Workshop Participant"
    },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground italic">
            Transformation in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results through collaborative, systems-thinking workshops
          </p>
        </div>

        <Tabs defaultValue={studies[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 h-auto bg-transparent p-0 mb-8">
            {studies.map((study) => (
              <TabsTrigger
                key={study.id}
                value={study.id}
                className="group relative overflow-hidden border-2 border-primary/20 bg-card hover:bg-gradient-card hover:border-accent transition-all duration-300 data-[state=active]:bg-gradient-card data-[state=active]:border-accent data-[state=active]:shadow-elegant h-auto p-6 rounded-lg"
              >
                <div className="text-left space-y-2">
                  <Badge variant="secondary" className="mb-2 bg-accent/10 text-accent border-accent/30">
                    {study.client}
                  </Badge>
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                    {study.tabTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.teaser}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {studies.map((study) => (
            <TabsContent key={study.id} value={study.id} className="mt-0">
              <Card className="overflow-hidden border-2 border-primary/10 bg-card shadow-elegant">
                <div className="p-8">
                  {/* Compact Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-2 group">
                      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-rose/10 group-hover:bg-rose/20 transition-colors">
                        <div className="p-1.5 rounded-full bg-rose/20">
                          <Target className="w-4 h-4 text-rose" />
                        </div>
                        <h3 className="text-xs font-bold text-rose uppercase tracking-wider">
                          Context
                        </h3>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pl-2 border-l-2 border-rose/20">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-2 group">
                      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <div className="p-1.5 rounded-full bg-primary/20">
                          <Lightbulb className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                          Approach
                        </h3>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pl-2 border-l-2 border-primary/20">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="space-y-2 group">
                      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <div className="p-1.5 rounded-full bg-accent/20">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wider">
                          Outcome
                        </h3>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pl-2 border-l-2 border-accent/20">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-accent/10 to-rose/5 p-6 rounded-lg border-l-4 border-accent relative shadow-soft hover:shadow-speech transition-shadow">
                    <Quote className="w-7 h-7 text-accent/40 absolute top-4 right-4" />
                    <p className="text-base text-foreground/90 italic leading-relaxed mb-3 pr-10">
                      "{study.testimonial}"
                    </p>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      — {study.author}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
