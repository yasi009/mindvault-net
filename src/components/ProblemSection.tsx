import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
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
      external: "Are you drowning in assignments and apps?",
      internal: "Do you feel scattered, overwhelmed, and always behind?",
      philosophical: "You deserve tools that work for you, not against you."
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            You're Not Alone in This Struggle
          </h2>
        </div>

        <div className="space-y-8">
          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{problem.external}</h3>
              <p className="text-muted-foreground leading-relaxed">
                The external challenge: too many tools, too much noise, and not enough time to figure it all out.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{problem.internal}</h3>
              <p className="text-muted-foreground leading-relaxed">
                The internal struggle: feeling lost, anxious, and like everyone else has it figured out except you.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
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