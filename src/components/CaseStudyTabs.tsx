import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Quote, ArrowRight, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const CaseStudyTabs = () => {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

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

  const currentStudy = studies.find(s => s.id === selectedStudy);

  return (
    <section className="py-16 px-6 relative">
      {/* Decorative Section Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative animate-fade-in flex items-center gap-4">
          {/* Left line with star */}
          <div className="flex items-center">
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
            <span className="text-accent text-xl mx-2">✦</span>
          </div>
          
          {/* Main badge - rectangle with sharp edges */}
          <div className="relative bg-gradient-to-r from-accent via-rose to-primary p-[2px] shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            <div className="bg-background/95 backdrop-blur-sm px-10 py-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl bg-gradient-to-r from-accent via-rose to-primary bg-clip-text text-transparent uppercase tracking-[0.2em] text-center whitespace-nowrap">
                Past Workshops
              </h3>
            </div>
          </div>
          
          {/* Right line with star */}
          <div className="flex items-center">
            <span className="text-accent text-xl mx-2">✦</span>
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-l from-transparent via-accent/50 to-accent"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground italic">
            Transformation in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results through collaborative, systems-thinking workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((study) => (
            <Card
              key={study.id}
              onClick={() => setSelectedStudy(study.id)}
              className="group relative overflow-hidden border-2 border-primary/20 bg-card hover:bg-gradient-card hover:border-accent transition-all duration-300 cursor-pointer h-full p-6 hover:shadow-elegant"
            >
              <div className="text-center space-y-3 flex flex-col items-center justify-center h-full">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                  {study.client}
                </Badge>
                <h3 className="font-heading font-bold text-lg text-accent uppercase tracking-wide leading-tight">
                  {study.tabTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.teaser}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                  <ArrowRight className="w-5 h-5 text-accent mx-auto" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dialog Popup */}
        <Dialog open={!!selectedStudy} onOpenChange={(open) => !open && setSelectedStudy(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {currentStudy && (
              <>
                <DialogHeader>
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                      {currentStudy.client}
                    </Badge>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
                      {currentStudy.tabTitle}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Compact Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
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
                        {currentStudy.challenge}
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
                        {currentStudy.solution}
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
                        {currentStudy.result}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-accent/10 to-rose/5 p-6 rounded-lg border-l-4 border-accent relative shadow-soft">
                    <Quote className="w-7 h-7 text-accent/40 absolute top-4 right-4" />
                    <p className="text-base text-foreground/90 italic leading-relaxed mb-3 pr-10">
                      "{currentStudy.testimonial}"
                    </p>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      — {currentStudy.author}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
