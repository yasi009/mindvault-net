import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Briefcase, Download, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpeechBubble } from "./SpeechBubble";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";
import { ConsultationDialog } from "./ConsultationDialog";
import { useAudience } from "@/contexts/AudienceContext";

export const AudienceTabs = () => {
  const { setAudience } = useAudience();
  const [toolDialogOpen, setToolDialogOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("students");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    setAudience(value as "students" | "educators" | "executives");
    
    // Scroll to packages section
    setTimeout(() => {
      document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground">
              Select your role to explore tailored resources and support
            </p>
          </div>

          <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="students" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span className="hidden sm:inline">Students</span>
              </TabsTrigger>
              <TabsTrigger value="educators" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Educators</span>
              </TabsTrigger>
              <TabsTrigger value="executives" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Executives</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="animate-fade-in">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Build your Life OS and master modern tools for smarter studying.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stop feeling scattered. Start building systems that help you study smarter, manage your time, and feel more in control.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <SpeechBubble
                    quote="You made me feel like I could actually do this."
                    author="Student"
                    variant="left"
                  />
                  <SpeechBubble
                    quote="I thought AI was complicated, but now I use it every day for my studies."
                    author="UNSW Student"
                    variant="right"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" onClick={() => setToolDialogOpen(true)}>
                    <Download className="w-5 h-5 mr-2" />
                    Download Free Tools
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="educators" className="animate-fade-in">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Transform your classroom with AI literacy and practical systems for less chaos.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bring clarity to your teaching practice with tools and workshops designed for real classrooms.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <SpeechBubble
                    quote="This gave me energy and hope for my classroom."
                    author="Educator"
                    variant="left"
                  />
                  <SpeechBubble
                    quote="Finally, PD that's actually relevant and engaging."
                    author="Primary Teacher"
                    variant="right"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" onClick={() => setConsultationOpen(true)}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Join Upcoming Workshop
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="executives" className="animate-fade-in">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Lead digital transformation with clarity and confidence.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Navigate AI integration and organizational change with strategic frameworks that drive real results.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <SpeechBubble
                    quote="This changed how I lead."
                    author="Executive"
                    variant="left"
                  />
                  <SpeechBubble
                    quote="Finally, someone who understands both strategy and implementation."
                    author="Operations Director"
                    variant="right"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" onClick={() => setConsultationOpen(true)}>
                    <Phone className="w-5 h-5 mr-2" />
                    Book a 15-min Call
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ToolSignupDialog
        open={toolDialogOpen}
        onOpenChange={setToolDialogOpen}
        toolName="Free Resources"
      />
      
      <ConsultationDialog 
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
    </>
  );
};