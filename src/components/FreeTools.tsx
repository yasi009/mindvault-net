import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Bot, BookOpen } from "lucide-react";

export const FreeTools = () => {
  const tools = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Life OS for Educators Template",
      description: "Ready-to-use Notion dashboard designed for teachers to manage lessons, admin tasks, and professional goals efficiently.",
      cta: "Download Free"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Sample Classroom GPT",
      description: "Try a demo custom GPT to see how AI can support student learning and save you hours on repetitive questions.",
      cta: "Try Demo GPT"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI Literacy Guides",
      description: "Free curriculum resources, workshop frameworks, and professional development materials for integrating AI into teaching.",
      cta: "Explore Resources"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Tools for Teachers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free resources to help educators get started with AI literacy and digital transformation — no strings attached.
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
      </div>
    </section>
  );
};
