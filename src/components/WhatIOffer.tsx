import { ServiceCard } from "./ServiceCard";
import { Brain, Sparkles, Code, TrendingUp } from "lucide-react";

export const WhatIOffer = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development and consulting services for educators ready to embrace AI and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Brain className="w-12 h-12" />}
            title="PD Workshops for Staff"
            description="Interactive professional development sessions on AI literacy, digital confidence, and classroom integration. Designed for teachers, lecturers, and education leaders. $1,500–$3,000 per session."
          />
          
          <ServiceCard
            icon={<Sparkles className="w-12 h-12" />}
            title="Custom Classroom GPTs"
            description="Course-specific AI assistants trained on your curriculum. Help students 24/7 while saving educators hours on repetitive questions. $2,000–$5,000 per course."
          />
          
          <ServiceCard
            icon={<Code className="w-12 h-12" />}
            title="Life OS for Educators"
            description="Ready-to-use templates and training to help teachers manage workload, reduce admin time, and optimize their teaching workflows. $500–$1,500 per package."
          />
          
          <ServiceCard
            icon={<TrendingUp className="w-12 h-12" />}
            title="Strategic Consulting"
            description="Advisory services for schools and institutions on digital maturity, AI adoption roadmaps, and curriculum integration. Ongoing retainers available. $1–3k/month."
          />
        </div>
      </div>
    </section>
  );
};
