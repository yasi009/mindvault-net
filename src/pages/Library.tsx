import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Download, BookOpen, Lightbulb } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "@/components/ToolSignupDialog";

const Library = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");

  const resources = [
    {
      icon: FileText,
      title: "Life OS Template",
      description:
        "A comprehensive Notion template to design your personal operating system. Organize your goals, projects, and daily workflows in one place.",
      category: "Template",
    },
    {
      icon: Lightbulb,
      title: "AI Literacy Checklist",
      description:
        "Essential guide to understanding and implementing AI in your work. No technical background required.",
      category: "Guide",
    },
    {
      icon: BookOpen,
      title: "Systems Thinking Framework",
      description: "Learn to identify patterns, design solutions, and build sustainable systems for work and life.",
      category: "Framework",
    },
    {
      icon: Download,
      title: "Workflow Audit Template",
      description:
        "Step-by-step template to analyze your current processes and identify opportunities for optimization.",
      category: "Template",
    },
  ];

  const handleResourceClick = (title: string) => {
    setSelectedTool(title);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic uppercase">
            Free Resources & Tools
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practical frameworks and templates to help you build clarity and design better systems.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all cursor-pointer group"
                onClick={() => handleResourceClick(resource.title)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <resource.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                    <div className="mt-4 text-sm font-medium text-primary group-hover:underline">Get Notified →</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Finally here */}
          <div className="mt-16 bg-gradient-card p-10 rounded-xl text-center border border-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">More Resources Coming Soon</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're constantly creating new guides, case studies, and templates. Sign up for any resource above to be
              notified when new content becomes available.
            </p>
          </div>
        </div>
      </section>

      <ToolSignupDialog open={dialogOpen} onOpenChange={setDialogOpen} toolName={selectedTool} delayedDelivery={true} />
      <Footer />
    </div>
  );
};

export default Library;
