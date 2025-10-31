import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles, GraduationCap, BookOpen, Code, Briefcase, Lightbulb, Building2, MessageSquare, Target, Wrench, Workflow, TrendingUp, Rocket } from "lucide-react";
import { useAudience } from "@/contexts/AudienceContext";

export const Workshops = () => {
  const { audience } = useAudience();

  if (!audience) return null;

  const studentWorkshops = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Girls in STEM (NIDA Theatre)",
      description: "Join our flagship 'Debunk, Demystify, Design' workshop creating a safe sisterhood for young women exploring AI and tech.",
      community: "Yeah the Girls"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "High School Communities",
      description: "Interactive sessions teaching you how to build Life OS systems and custom GPTs for study and personal growth.",
      community: "ISRA & local schools"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "University Classes",
      description: "AI literacy workshops for UNSW peers, helping students integrate productivity tools and custom GPTs into coursework.",
      community: "UNSW & beyond"
    }
  ];

  const educatorWorkshops = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI Literacy for Educators",
      description: "Professional development workshops teaching practical AI integration for classroom management, lesson planning, and student engagement.",
      community: "Schools & Institutions"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Girls in STEM Model",
      description: "Learn the framework behind our successful 'Debunk, Demystify, Design' approach to make technology education accessible and engaging.",
      community: "Educators Network"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom GPT Development for Teachers",
      description: "Design AI tutors and classroom assistants tailored to your curriculum—from grading support to personalized student feedback.",
      community: "Teaching Innovators"
    }
  ];

  const executiveWorkshops = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "AI Strategy Workshops",
      description: "Executive-level sessions to build organizational AI capability, from strategic planning to practical implementation roadmaps.",
      community: "C-Suite Leaders"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Transformation Sprints",
      description: "4-week intensive programs combining workshops, audits, and coaching to drive meaningful organizational change.",
      community: "Innovation Teams"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Pilot Design Sessions",
      description: "Hands-on workshops to design and launch AI pilots with playbooks for scaling across departments.",
      community: "Executives"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Demystifying AI for Business Leaders",
      description: "Flagship executive workshop introducing the four types of AI, integration pyramid, and real use cases. Participants leave with mapped high-ROI opportunities and clearer implementation strategies.",
      community: "Business Leaders"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Laying the Foundations for Scalable Intelligence",
      description: "Internal transformation workshop on data readiness and system architecture. Introduces the Foundations → Systems → ROI framework for digital strategy rollout.",
      community: "Department Heads"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Prompting for Impact: How to Talk to AI Tools",
      description: "Interactive training with live prompting exercises, template cards, and real use cases for email generation, report summarization, and product lookup.",
      community: "All Staff"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "From Chaos to Clarity: Building AI Infrastructure",
      description: "Visualizing the cost of disjointed systems and proposing unified architecture. Sets groundwork for AI enablement roadmap and data integration projects.",
      community: "Leadership"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Toolminator: The Internal GPT Pilot",
      description: "Showcase workshop with live demo of custom GPT trained on product data. Includes Q&A and prompting best practices for internal enablement.",
      community: "Product Teams"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Generative AI in the Flow of Work",
      description: "Streamlining documentation, reporting, and communication using live workflows. Covers automated meeting summaries and client proposal drafts.",
      community: "Business Leaders"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "From Fixes to ROI: Turning Experiments into Value",
      description: "Strategic workshop mapping short-term wins to long-term ROI pillars. Provides clear lens for evaluating future AI investments and priorities.",
      community: "Leadership"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "The Future of Work: Human + AI Collaboration",
      description: "Leadership-facing talk on responsible AI in mid-sized enterprises. Explores balance between human judgment and AI augmentation.",
      community: "C-Suite"
    }
  ];

  const getWorkshops = () => {
    switch (audience) {
      case "students":
        return studentWorkshops;
      case "educators":
        return educatorWorkshops;
      case "executives":
        return executiveWorkshops;
      default:
        return studentWorkshops;
    }
  };

  const getTitle = () => {
    switch (audience) {
      case "students":
        return "Workshops & Community";
      case "educators":
        return "Professional Development Workshops";
      case "executives":
        return "Strategic Programs";
      default:
        return "Workshops & Community";
    }
  };

  const getSubtitle = () => {
    switch (audience) {
      case "students":
        return "Building confidence, curiosity, and tech fluency — one workshop at a time";
      case "educators":
        return "Interactive PD sessions designed to bring AI literacy to your classroom";
      case "executives":
        return "Intensive programs to build AI capability and drive organizational transformation";
      default:
        return "Building confidence, curiosity, and tech fluency — one workshop at a time";
    }
  };

  const workshops = getWorkshops();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {getTitle()}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getSubtitle()}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-card border-border shadow-soft hover:shadow-elegant">
              <CardContent className="p-8">
                <div className="text-primary mb-4 group-hover:animate-float">
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{workshop.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{workshop.description}</p>
                <div className="inline-block bg-secondary/20 px-3 py-1 rounded-full">
                  <span className="text-sm text-secondary-foreground font-medium">{workshop.community}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
