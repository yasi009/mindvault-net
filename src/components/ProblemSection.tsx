import { Card, CardContent } from "@/components/ui/card";
import { useAudience } from "@/contexts/AudienceContext";

interface Problem {
  external: string;
  internal: string;
  philosophical: string;
}

export const ProblemSection = () => {
  const { audience } = useAudience();

  const problems: Record<string, Problem> = {
    students: {
      external: "Drowning in assignments and don't know where to start?",
      internal: "Feel scattered, overwhelmed, and like everyone else has it figured out except you?",
      philosophical: "You deserve to feel organized and in control, not constantly stressed."
    },
    educators: {
      external: "Are your students disengaged and the tech gap widening?",
      internal: "Do you feel overwhelmed by PD that doesn't stick?",
      philosophical: "You deserve practical training that transforms classrooms, not just checks boxes."
    },
    executives: {
      external: "Is AI hype leading to wasted budgets and scattered pilots?",
      internal: "Do you fear falling behind while your team resists change?",
      philosophical: "You deserve strategic clarity, not empty buzzwords."
    }
  };

  const problem = problems[audience || "students"];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="w-full bg-accent py-6 mb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              You're Not Alone in This Struggle
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-l-4 border-l-destructive transition-transform duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{problem.external}</h3>
              <p className="text-muted-foreground leading-relaxed">
                The external challenge: too many tools, too much noise, and not enough time to figure it all out.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary transition-transform duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{problem.internal}</h3>
              <p className="text-muted-foreground leading-relaxed">
                The internal struggle: feeling lost, anxious, and like everyone else has it figured out except you.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent transition-transform duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{problem.philosophical}</h3>
              <p className="text-muted-foreground leading-relaxed">
                The truth: You shouldn't have to work this hard to feel this scattered. There's a better way.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};