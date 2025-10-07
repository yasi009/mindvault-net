import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, BookOpen, FileText } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";

export const FreeTools = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");

  const tools = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Complete Study Organization System",
      description: "A simple framework to organize your assignments, notes, and goals in one place.",
      cta: "Get Template"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Study Assistants Built for You",
      description: "Tools that help with research, essay planning, exam prep, and taking better notes.",
      cta: "Access Study Helpers"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Reflection & Goal-Setting Prompts",
      description: "Simple questions to help you reflect, set goals, and stay clear on what matters.",
      cta: "Download Prompts"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Student Productivity Guide",
      description: "Learn how to save time on assignments and feel more in control of your schedule.",
      cta: "Get Guide"
    }
  ];

  const handleToolClick = (toolTitle: string) => {
    setSelectedTool(toolTitle);
    setDialogOpen(true);
  };

  return (
    <section id="free-tools" className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Start Small. Start Now.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access free templates, GPTs, and study tools that help you feel less scattered and more in control.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
