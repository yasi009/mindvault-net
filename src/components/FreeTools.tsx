import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, BookOpen, FileText, Users, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";
import { useAudience } from "@/contexts/AudienceContext";

export const FreeTools = () => {
  const { audience } = useAudience();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const studentTools = [
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
  
  const handleNext = () => {
    if (currentIndex < tools.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
        return "Everything you need to save time, feel less stressed, and organize your study life";
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

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          {tools.length > 3 && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-accent text-accent-foreground p-3 rounded-full shadow-elegant hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= tools.length - 3}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-accent text-accent-foreground p-3 rounded-full shadow-elegant hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Tools Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {tools.map((tool, index) => (
                <div key={index} className="min-w-[calc(33.333%-1.333rem)] flex-shrink-0">
                  <Card className="group hover:scale-105 transition-all duration-300 bg-card border-border shadow-soft hover:shadow-elegant h-full">
                    <CardContent className="p-8 text-center flex flex-col h-full">
                      <div className="text-primary mb-4 flex justify-center group-hover:animate-float">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{tool.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{tool.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleToolClick(tool.title)}
                      >
                        {tool.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
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
