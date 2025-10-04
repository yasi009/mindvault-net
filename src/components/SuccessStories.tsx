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
      problem: "Patient handovers had critical information gaps, leading to care coordination errors.",
      solution: "Built custom GPT + Zapier workflow for automated patient summary generation.",
      impact: "Saved 5+ staff hours per week, improved care documentation accuracy by 40%.",
      client: "NDIS South Coast Carers"
    },
    {
      problem: "Product knowledge spread across multiple systems, slowing down sales and support.",
      solution: "Implemented custom GPT solutions for internal knowledge management across 3 markets.",
      impact: "Reduced product knowledge retrieval time by 85%, established AI roadmap for C-suite.",
      client: "Makinex Construction"
    },
    {
      problem: "Young women lacked confidence and community in STEM career pathways.",
      solution: "Led flagship 'Debunk, Demystify, Design' workshop series with ongoing mentorship.",
      impact: "Established community of 50+ young women, 90% reported increased STEM confidence.",
      client: "Girls in STEM (NIDA)"
    },
    {
      problem: "Orphanage children had no exposure to technology or AI literacy.",
      solution: "Taught foundational tech/AI literacy workshop with hands-on learning activities.",
      impact: "Sparked curiosity and empowerment, introduced digital skills for future opportunities.",
      client: "Bali Orphanage"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real problems solved. Measurable impact delivered.
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