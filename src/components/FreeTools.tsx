import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Bot, BookOpen } from "lucide-react";

export const FreeTools = () => {
  const tools = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Student Life OS (Notion)",
      description: "Rituals, trackers, weekly review templates — your personal operating system.",
      cta: "Download Free"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Study GPT (course example)",
      description: "Quiz yourself, summarise readings, plan study sessions with your own AI buddy.",
      cta: "Get Your GPT"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Reflection Prompts",
      description: "Identity, values, focus resets — short exercises to build clarity.",
      cta: "Download Prompts"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Free Tools for Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download the starter kit and get moving today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card border-border shadow-soft hover:shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:animate-float">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{tool.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{tool.description}</p>
                <Button variant="outline" className="w-full">
                  {tool.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-md mx-auto">
          Get instant access + updates. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
