import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, BookOpen, FileText, Users, Briefcase } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";
import { useAudience } from "@/contexts/AudienceContext";

export const FreeTools = () => {
  const { audience } = useAudience();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");

  const studentTools = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Life OS Notion Template",
      description: "A complete framework for managing your student life, projects, and goals in Notion.",
      cta: "Get Template"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Custom Study GPTs",
      description: "Pre-built GPTs for research, note-taking, essay planning, and exam prep.",
      cta: "Access GPTs"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Journaling Prompts",
      description: "Guided prompts and frameworks for reflection, goal-setting, and self-awareness.",
      cta: "Download Prompts"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Student Productivity Guide",
      description: "Essential workflows and systems to build your personal operating system.",
      cta: "Get Guide"
    }
  ];

  const educatorTools = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Classroom AI Toolkit",
      description: "Ready-to-use GPTs and templates for lesson planning, grading, and student feedback.",
      cta: "Get Toolkit"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Workshop Framework",
      description: "The 'Debunk, Demystify, Design' methodology for teaching AI literacy in your classroom.",
      cta: "Download Framework"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "PD Resources Library",
      description: "Curated collection of AI literacy resources and professional development materials.",
      cta: "Access Library"
    }
  ];

  const executiveTools = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "AI Readiness Assessment",
      description: "Evaluate your organization's digital maturity and identify priority areas for AI integration.",
      cta: "Get Assessment"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Strategic Planning Template",
      description: "Framework for building your AI implementation roadmap and measuring success.",
      cta: "Download Template"
    }
  ];

  const getTools = () => {
    switch (audience) {
      case "students":
        return studentTools;
      case "educators":
        return educatorTools;
      case "executives":
        return executiveTools;
      default:
        return [];
    }
  };

  const handleToolClick = (toolTitle: string) => {
    setSelectedTool(toolTitle);
    setDialogOpen(true);
  };

  const tools = getTools();

  if (!audience || tools.length === 0) return null;

  const getTitle = () => {
    switch (audience) {
      case "students":
        return "Free Tools & Resources";
      case "educators":
        return "Free Teaching Resources";
      case "executives":
        return "Free Assessment Tools";
      default:
        return "Free Resources";
    }
  };

  const getSubtitle = () => {
    switch (audience) {
      case "students":
        return "Everything you need to start building your future — no strings attached";
      case "educators":
        return "Practical tools to bring AI literacy and systems thinking to your classroom";
      case "executives":
        return "Strategic resources to evaluate and plan your AI transformation";
      default:
        return "Resources to get you started";
    }
  };

  return (
    <section id="free-tools" className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {getTitle()}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getSubtitle()}
          </p>
        </div>

        <div className={`grid gap-8 ${tools.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'}`}>
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
