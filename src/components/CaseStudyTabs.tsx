import { useState, useRef, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Quote, ArrowRight, Target, Lightbulb, CheckCircle2, Users, Sparkles, GraduationCap, BookOpen, Code, Briefcase, Building2, MessageSquare, Wrench, Workflow, TrendingUp, Rocket, ChevronLeft, ChevronRight, Heart, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Study {
  id: string;
  client: string;
  tabTitle: string;
  teaser: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: string;
  author: string;
}

interface Workshop extends Study {
  icon: ReactNode;
}

export const CaseStudyTabs = () => {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const studies: Workshop[] = [
    {
      id: "healthcare",
      icon: <Heart className="w-6 h-6" />,
      client: "Healthcare Provider",
      tabTitle: "NDIS Workflow Transformation",
      teaser: "From messy case notes to streamlined AI workflow in healthcare",
      challenge: "The care team was overwhelmed by inconsistent case notes coming from multiple carers in different formats, causing admin delays and compliance challenges.",
      solution: "Facilitated a hands-on workshop with key team members, guiding them through mapping their current case note processes and co-designing an AI-assisted workflow. Together, we explored integrating automation to structure notes, link records in Xero, and create client summaries in real time. This method applied the Life OS systems-thinking framework connecting values to daily habits and goals.",
      result: "The team gained ownership of the new streamlined workflow, significantly reducing manual admin time and enhancing care consistency.",
      testimonial: "Yaseerah's workshop was eye-opening—I didn't realize how messy our system was until we mapped it out together. The AI tools we designed together are making my workday easier and more organized.",
      author: "Care Team Member"
    },
    {
      id: "makinex",
      icon: <Building className="w-6 h-6" />,
      client: "Makinex",
      tabTitle: "AI Strategy Workshop",
      teaser: "Transforming AI confusion into confident digital adoption",
      challenge: "The leadership and staff were unsure how AI could fit into their fragmented digital ecosystem and lacked confidence in adopting new tech.",
      solution: "Delivered a series of interactive AI literacy sessions where participants learned AI basics, examined existing workflows, and identified digital readiness gaps. We then collaborated to design a phased AI integration roadmap grounded in the DDD framework — Debunk inefficiencies, Demystify AI, Design a practical plan.",
      result: "The team left with strengthened digital foundations and a clear, human-centered strategy for responsible AI adoption.",
      testimonial: "The workshop helped us take AI from a confusing buzzword to a practical tool. We all felt more confident and ready to transform our business.",
      author: "Workshop Participant"
    },
    {
      id: "girlsinbusiness",
      icon: <Sparkles className="w-6 h-6" />,
      client: "Girls in Business (UNSW/NIDA)",
      tabTitle: "Empowerment Workshop",
      teaser: "Inspiring young women to design their futures with confidence",
      challenge: "High school girls attending were navigating social stereotypes and feeling uncertain about their futures in technology-driven fields.",
      solution: "Co-delivered a dynamic, storytelling-based workshop including candid talks and live exercises where participants unpacked identity and confidence around AI. We introduced Life OS frameworks for intentional future planning, engaging everyone in conversations about their digital empowerment.",
      result: "The workshop inspired hundreds of young women to rethink their potential and approach their futures with clarity and courage.",
      testimonial: "Yasi's workshop was one of the most empowering I attended. It was honest, brave, and gave me tools to believe in myself and lead in a tech world.",
      author: "Workshop Participant"
    },
  ];

  const workshops: Workshop[] = [
    {
      id: "design-thinking-students",
      icon: <Users className="w-6 h-6" />,
      client: "Students",
      tabTitle: "Design Thinking for Student Leaders",
      teaser: "Real-world problem-solving frameworks for changemakers",
      challenge: "Student leaders wanted practical tools to tackle complex community challenges but lacked structured problem-solving methods.",
      solution: "Led interactive design thinking workshops where students defined problems, ideated solutions, and prototyped real initiatives using the DDD framework.",
      result: "Participants developed actionable projects and reported increased confidence in leading community-driven change.",
      testimonial: "This workshop gave me the tools to turn my ideas into reality. I finally feel like I can make a real impact.",
      author: "Student Leader"
    },
    {
      id: "ai-literacy-students",
      icon: <Sparkles className="w-6 h-6" />,
      client: "Students",
      tabTitle: "AI Literacy for Digital Natives",
      teaser: "Understanding AI beyond the hype",
      challenge: "Students were using AI tools daily without understanding how they work or their implications.",
      solution: "Designed engaging sessions demystifying AI fundamentals, ethics, and practical applications in academic and personal contexts.",
      result: "Students gained critical AI literacy and confidence to use these tools responsibly and effectively.",
      testimonial: "I use ChatGPT every day, but I never understood it until this workshop. Now I feel empowered, not just entertained.",
      author: "University Student"
    },
    {
      id: "life-os-students",
      icon: <GraduationCap className="w-6 h-6" />,
      client: "Students",
      tabTitle: "Life OS for Students",
      teaser: "Building systems that align values with daily habits",
      challenge: "Students struggled with fragmented productivity systems and unclear long-term direction.",
      solution: "Introduced the Life OS framework connecting identity, values, habits, and goals in one integrated Notion system.",
      result: "Participants reported greater clarity, consistency, and control over their academic and personal lives.",
      testimonial: "Life OS changed how I approach everything. I'm not just productive—I'm intentional.",
      author: "Student Participant"
    },
    {
      id: "ai-pedagogy",
      icon: <BookOpen className="w-6 h-6" />,
      client: "Educators",
      tabTitle: "AI in Pedagogy",
      teaser: "Transforming teaching with AI-assisted learning design",
      challenge: "Educators wanted to integrate AI into their teaching but felt overwhelmed by the options and ethics.",
      solution: "Facilitated hands-on workshops exploring AI tools for lesson planning, assessment design, and personalized learning.",
      result: "Teachers left with practical AI integration strategies aligned with educational values.",
      testimonial: "This workshop helped me see AI as a teaching partner, not a replacement. I feel confident experimenting now.",
      author: "High School Teacher"
    },
    {
      id: "systems-thinking-educators",
      icon: <Code className="w-6 h-6" />,
      client: "Educators",
      tabTitle: "Systems Thinking for Curriculum Design",
      teaser: "Connecting learning outcomes to real-world systems",
      challenge: "Educators struggled to design curricula that prepared students for complex, interconnected challenges.",
      solution: "Led collaborative sessions using systems thinking frameworks to redesign units around real-world complexity.",
      result: "Educators created more engaging, relevant curricula that students connected with deeply.",
      testimonial: "Systems thinking transformed my approach. My students are finally seeing the big picture.",
      author: "Curriculum Designer"
    },
    {
      id: "digital-literacy-educators",
      icon: <Briefcase className="w-6 h-6" />,
      client: "Educators",
      tabTitle: "Digital Literacy Leadership",
      teaser: "Leading the charge in digital transformation",
      challenge: "School leaders needed to champion digital literacy but lacked clarity on where to start.",
      solution: "Delivered strategic workshops mapping digital readiness, identifying gaps, and designing phased adoption plans.",
      result: "Leaders gained confidence to drive whole-school digital transformation initiatives.",
      testimonial: "This workshop gave me the roadmap I needed to lead digital change with purpose.",
      author: "School Principal"
    },
    {
      id: "demystifying-ai",
      icon: <Lightbulb className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "Demystifying AI for Business Leaders",
      teaser: "Understanding the four types of AI and integration pyramid",
      challenge: "Business leaders felt AI was confusing buzzword without clear ROI or implementation path.",
      solution: "Flagship executive workshop introducing AI types, integration strategies, and real use cases with responsible implementation frameworks.",
      result: "Participants left with mapped high-ROI opportunities and clearer understanding of AI implementation.",
      testimonial: "This workshop cut through the noise. I finally understand where AI fits in our strategy.",
      author: "Business Leader"
    },
    {
      id: "scalable-intelligence",
      icon: <Building2 className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "Laying Foundations for Scalable Intelligence",
      teaser: "Building architecture for AI scalability",
      challenge: "Department heads struggled with fragmented systems preventing AI scalability.",
      solution: "Internal transformation workshop on data readiness and system architecture using the Foundations → Systems → ROI framework.",
      result: "Introduced strategic framework used to guide organization's digital strategy rollout.",
      testimonial: "This workshop showed us the hidden cost of chaos and gave us a clear path forward.",
      author: "Department Head"
    },
    {
      id: "prompting-impact",
      icon: <MessageSquare className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "Prompting for Impact",
      teaser: "Teaching teams to communicate effectively with AI tools",
      challenge: "Staff lacked confidence using internal AI tools and getting quality results.",
      solution: "Interactive training with live prompting exercises, template cards, and real use cases for business workflows.",
      result: "Improved staff confidence and effectiveness using AI tools across departments.",
      testimonial: "I thought I knew how to use AI. This workshop showed me I'd barely scratched the surface.",
      author: "Operations Manager"
    },
    {
      id: "toolminator",
      icon: <Wrench className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "Toolminator: The Internal GPT Pilot",
      teaser: "Custom GPT trained on product data for internal enablement",
      challenge: "Teams needed faster access to product information and spare parts data.",
      solution: "Showcase workshop with live demo of custom GPT, Q&A, and prompting best practices for internal use.",
      result: "Validated AI as internal enablement tool and inspired future automation across departments.",
      testimonial: "Toolminator changed how our team accesses information. It's like having an expert on call 24/7.",
      author: "Product Team Lead"
    },
    {
      id: "ai-workflow",
      icon: <Workflow className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "Generative AI in the Flow of Work",
      teaser: "Streamlining documentation and communication with AI",
      challenge: "Teams spent too much time on documentation, reporting, and routine communications.",
      solution: "Workshop showing how AI streamlines workflows using real examples like automated meeting summaries and proposal drafts.",
      result: "Leaders identified low-risk automation wins and built confidence in AI adoption.",
      testimonial: "We're saving hours every week on admin work. AI in our workflow has been transformative.",
      author: "Business Leader"
    },
    {
      id: "fixes-to-roi",
      icon: <TrendingUp className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "From Fixes to ROI",
      teaser: "Turning AI experiments into measurable business value",
      challenge: "Organizations ran AI pilots without clear metrics or path to scale.",
      solution: "Strategic workshop mapping short-term wins to long-term ROI pillars with clear evaluation criteria.",
      result: "Provided framework for evaluating future AI investments and transformation priorities.",
      testimonial: "This workshop shifted our thinking from 'cool tech' to 'strategic value.' Game changer.",
      author: "C-Suite Executive"
    },
    {
      id: "human-ai-collaboration",
      icon: <Rocket className="w-6 h-6" />,
      client: "Executives",
      tabTitle: "The Future of Work: Human + AI Collaboration",
      teaser: "Exploring responsible AI in mid-sized enterprises",
      challenge: "Leaders needed clarity on balancing human judgment with AI augmentation.",
      solution: "Leadership-facing talk on responsible AI implementation and human-AI collaboration principles.",
      result: "Shaped organization's internal communications on digital transformation.",
      testimonial: "This talk helped us frame AI not as replacement, but as partnership. Perfect narrative for our team.",
      author: "C-Suite Leader"
    },
  ];

  const allItems: Workshop[] = [...studies, ...workshops];

  const currentStudy = allItems.find(s => s.id === selectedStudy);

  return (
    <section className="py-16 px-6 relative">
      {/* Decorative Section Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative animate-fade-in flex items-center gap-4">
          {/* Left line with star */}
          <div className="flex items-center">
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
            <span className="text-primary text-xl mx-2">✦</span>
          </div>
          
          {/* Main badge - rectangle with sharp edges */}
          <div className="relative bg-gradient-to-r from-accent via-rose to-primary p-[2px] shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            <div className="bg-background/95 backdrop-blur-sm px-10 py-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl bg-gradient-to-r from-accent via-rose to-primary bg-clip-text text-transparent uppercase tracking-[0.2em] text-center whitespace-nowrap">
                Past Workshops
              </h3>
            </div>
          </div>
          
          {/* Right line with star */}
          <div className="flex items-center">
            <span className="text-primary text-xl mx-2">✦</span>
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto pt-8 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground italic">
            Transformation in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results through collaborative, systems-thinking workshops
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border-primary/20 hover:border-accent hover:bg-accent/10 shadow-lg"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border-primary/20 hover:border-accent hover:bg-accent/10 shadow-lg"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 min-w-max px-12 py-4">
              {allItems.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => setSelectedStudy(item.id)}
                  className="group relative overflow-hidden border-2 border-primary/20 bg-card hover:bg-gradient-card hover:border-accent transition-all duration-300 cursor-pointer p-6 hover:shadow-elegant flex-shrink-0 w-80"
                >
                  <div className="text-center space-y-3 flex flex-col items-center justify-center h-full">
                    {'icon' in item && item.icon && (
                      <div className="text-accent">
                        {item.icon}
                      </div>
                    )}
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                      {item.client}
                    </Badge>
                    <h3 className="font-heading font-bold text-lg text-accent uppercase tracking-wide leading-tight">
                      {item.tabTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.teaser}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                      <ArrowRight className="w-5 h-5 text-accent mx-auto" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Dialog Popup */}
        <Dialog open={!!selectedStudy} onOpenChange={(open) => !open && setSelectedStudy(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {currentStudy && (
              <>
                <DialogHeader>
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                      {currentStudy.client}
                    </Badge>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
                      {currentStudy.tabTitle}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Compact Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2 group">
                      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-rose/10 group-hover:bg-rose/20 transition-colors">
                        <div className="p-1.5 rounded-full bg-rose/20">
                          <Target className="w-4 h-4 text-rose" />
                        </div>
                        <h3 className="text-xs font-bold text-rose uppercase tracking-wider">
                          Context
                        </h3>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pl-2 border-l-2 border-rose/20">
                        {currentStudy.challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-2 group">
                      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <div className="p-1.5 rounded-full bg-primary/20">
                          <Lightbulb className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                          Approach
                        </h3>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pl-2 border-l-2 border-primary/20">
                        {currentStudy.solution}
                      </p>
                    </div>
                    
                    <div className="space-y-2 group">
                      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <div className="p-1.5 rounded-full bg-accent/20">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wider">
                          Outcome
                        </h3>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pl-2 border-l-2 border-accent/20">
                        {currentStudy.result}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-accent/10 to-rose/5 p-6 rounded-lg border-l-4 border-accent relative shadow-soft">
                    <Quote className="w-7 h-7 text-accent/40 absolute top-4 right-4" />
                    <p className="text-base text-foreground/90 italic leading-relaxed mb-3 pr-10">
                      "{currentStudy.testimonial}"
                    </p>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      — {currentStudy.author}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
