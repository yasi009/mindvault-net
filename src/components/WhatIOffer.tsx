import { ServiceCard } from "./ServiceCard";
import { Brain, Sparkles, Code, TrendingUp, GraduationCap, Users, Briefcase, BookOpen } from "lucide-react";
import { useAudience } from "@/contexts/AudienceContext";

export const WhatIOffer = () => {
  const { audience } = useAudience();

  const studentServices = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Life OS Setup",
      description: "Build your personalized student operating system using Notion templates, study workflows, and productivity frameworks designed specifically for students."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Custom Study GPTs",
      description: "Get access to course-specific AI assistants that help with research, note-taking, essay planning, and exam preparation."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Student Workshops",
      description: "Join interactive sessions on AI literacy, digital organization, and productivity systems—designed for students, by students."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Journaling & Reflection Tools",
      description: "Access free guided journaling prompts and reflection frameworks to build self-awareness and track your growth journey."
    }
  ];

  const educatorServices = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Professional Development Workshops",
      description: "Interactive PD sessions on AI literacy, classroom productivity systems, and digital transformation for future-ready teaching. A$1,500-3,000."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Custom GPT Tutors",
      description: "Design AI assistants tailored to your curriculum—from personalized student support tools to grading assistance and lesson planning."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Classroom Systems Design",
      description: "Implement digital workflows that reduce admin time and enhance student engagement using Notion, automation tools, and AI integration."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Strategic Consulting",
      description: "One-on-one coaching for educators looking to integrate AI and systems thinking into their teaching practice and professional development."
    }
  ];

  const executiveServices = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "AI Literacy Sprints",
      description: "4-week intensive programs to build organizational AI capability, from strategy to implementation. A$12,000-15,000."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Maturity Audits",
      description: "Comprehensive assessment of your tech stack, workflows, and processes with actionable roadmap for digital transformation."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Pilot Design & Playbooks",
      description: "Custom AI implementation pilots with detailed playbooks for scaling across departments, including change management support."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Executive Coaching",
      description: "Strategic one-on-one guidance for leaders navigating AI integration, organizational change, and digital innovation."
    }
  ];

  const defaultServices = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Life Operating System Design",
      description: "Develop personalized digital frameworks using Notion, automation tools, and systematic workflows that enhance productivity and decision-making capabilities."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Custom GPT Development",
      description: "Design and implement specialized AI assistants tailored to your unique requirements—from research tools to business process automation."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "AI Literacy Training",
      description: "Comprehensive workshops and coaching on AI tools, prompt engineering, and digital productivity—delivered in accessible, practical formats."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Strategic Consulting",
      description: "One-on-one guidance for professionals and organizations navigating digital transformation, AI integration, and productivity optimization."
    }
  ];

  const getServices = () => {
    switch (audience) {
      case "students":
        return studentServices;
      case "educators":
        return educatorServices;
      case "executives":
        return executiveServices;
      default:
        return defaultServices;
    }
  };

  const getTitle = () => {
    switch (audience) {
      case "students":
        return "What You Get";
      case "educators":
        return "Professional Development Programs";
      case "executives":
        return "Strategic Services";
      default:
        return "Services & Expertise";
    }
  };

  const getSubtitle = () => {
    switch (audience) {
      case "students":
        return "Free tools and resources to build your student life operating system";
      case "educators":
        return "Workshops and consulting to bring AI literacy and systems thinking to your classroom";
      case "executives":
        return "Cut through the AI noise with strategic consulting and implementation support";
      default:
        return "Comprehensive solutions for individuals and organizations seeking digital transformation";
    }
  };

  const services = getServices();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            {getTitle()}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getSubtitle()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
