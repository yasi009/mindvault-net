import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Bot, BookOpen } from "lucide-react";
import { ToolSignupDialog } from "./ToolSignupDialog";

export const FreeTools = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");
  const tools = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Life OS Template",
      description: "Complete Notion dashboard for goals, habits, reflection, and daily systems.",
      cta: "Download Free"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Course-Specific GPTs",
      description: "Custom GPTs built for UNSW students — study helpers, assignment guides, and more.",
      cta: "Access GPTs"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Tools & Guides",
      description: "Free resources on productivity, AI literacy, and building your digital confidence.",
      cta: "Explore Resources"
    }
  ];

  const handleToolClick = (toolTitle: string) => {
    setSelectedTool(toolTitle);
    setDialogOpen(true);
  };

  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Free Tools & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start building your future — no strings attached.
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
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleToolClick(tool.title)}
                >
                  {tool.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ToolSignupDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        toolName={selectedTool}
      />
    </section>
  );
};
