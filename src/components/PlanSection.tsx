import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Download, Rocket } from "lucide-react";

export const PlanSection = () => {
  const steps = [
    {
      number: "1",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Choose Your Path",
      description: "Select Student, Educator, or Executive to see packages tailored to your needs."
    },
    {
      number: "2",
      icon: <Download className="w-8 h-8" />,
      title: "Get Started",
      description: "Download a free tool to try MindVault, or book a 15-minute clarity call to discuss your goals."
    },
    {
      number: "3",
      icon: <Rocket className="w-8 h-8" />,
      title: "Build Your System",
      description: "Implement practical tools and strategies that save you time, reduce stress, and help you thrive."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Here's How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to go from chaos to clarity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-elegant">
              <CardContent className="p-8 text-center">
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-elegant">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6 flex justify-center text-primary">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -z-10" style={{ transform: 'translateY(-50%)' }}></div>
      </div>
    </section>
  );
};