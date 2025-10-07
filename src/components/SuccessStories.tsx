import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Story {
  problem: string;
  solution: string;
  impact: string;
  client: string;
}

export const SuccessStories = () => {
  const stories: Story[] = [
    {
      problem: "Care teams were drowning in handover chaos — critical patient information kept slipping through the cracks.",
      solution: "We built a simple system that turns scattered notes into clear, complete patient summaries automatically.",
      impact: "Staff got 5+ hours back each week. Documentation errors dropped by 40%. Care quality improved — and so did team morale.",
      client: "NDIS South Coast Carers"
    },
    {
      problem: "Product knowledge was buried across different systems. Sales and support teams were wasting hours searching for answers.",
      solution: "We created a thinking partner for their team — a tool that knows everything about their products, instantly.",
      impact: "Finding information went from frustrating to fast — 85% faster. Leadership finally had a roadmap for what's next.",
      client: "Makinex Construction"
    },
    {
      problem: "Young women felt like STEM wasn't for them. They lacked confidence, community, and role models.",
      solution: "We created 'Debunk, Demystify, Design' — a workshop series that makes tech feel personal, not intimidating. Then we kept showing up with mentorship.",
      impact: "50+ young women found their people. 90% said they now see themselves in STEM. The community is still growing.",
      client: "Girls in STEM (NIDA)"
    },
    {
      problem: "Children at an orphanage in Bali had never even touched a computer. They didn't know what was possible.",
      solution: "We taught a hands-on workshop introducing them to technology — not as something scary, but as something empowering.",
      impact: "You could see it in their eyes: curiosity, excitement, possibility. They left knowing they could create, not just consume.",
      client: "Bali Orphanage"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Stories That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people. Real breakthroughs. Real change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                        P
                      </div>
                      <h4 className="font-semibold text-foreground">Problem</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-10">
                      {story.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        S
                      </div>
                      <h4 className="font-semibold text-foreground">Solution</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-10">
                      {story.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                      <h4 className="font-semibold text-foreground">Impact</h4>
                    </div>
                    <p className="text-accent font-medium text-sm leading-relaxed ml-10">
                      {story.impact}
                    </p>
                  </div>

                  {/* Client */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium ml-10">
                      — {story.client}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};