import { Card } from "@/components/ui/card";
import { AlertCircle, Compass, Hammer } from "lucide-react";

export const DDDProcess = () => {
  const steps = [
    {
      icon: AlertCircle,
      title: "Debunk",
      description: "Identify what's not working. Cut through assumptions and surface the real challenges.",
      color: "text-accent bg-accent/10"
    },
    {
      icon: Compass,
      title: "Demystify",
      description: "Understand the systems and tools. Bring clarity to complexity through practical frameworks.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Hammer,
      title: "Design",
      description: "Build a practical solution. Create systems that work for you, not against you.",
      color: "text-accent bg-accent/10"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight italic uppercase">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 3-step process to transform overwhelm into intentional action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-shadow">
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
