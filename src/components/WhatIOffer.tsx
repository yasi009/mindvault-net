import { ServiceCard } from "./ServiceCard";
import { Brain, Sparkles, Code, TrendingUp } from "lucide-react";

export const WhatIOffer = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            What I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, student-friendly ways to build systems and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<Brain className="w-12 h-12" />}
            title="Life OS Coaching"
            description="Build your personal operating system in Notion: study trackers, rituals, review templates. Outcome: clarity in 2 hours."
          />
          
          <ServiceCard
            icon={<Sparkles className="w-12 h-12" />}
            title="Custom GPT Design"
            description="Create your own study buddy or journaling GPT trained on your content. Outcome: answers fast, consistent feedback."
          />
          
          <ServiceCard
            icon={<Code className="w-12 h-12" />}
            title="Digital Confidence"
            description="Tech hygiene, attention rituals, 'AI as a thinking partner' basics. Outcome: less overwhelm, more momentum."
          />
          
          <ServiceCard
            icon={<TrendingUp className="w-12 h-12" />}
            title="Business Mentoring"
            description="From student idea → first product: simple roadmaps and AI-powered workflows. Outcome: ship your first thing."
          />
        </div>
      </div>
    </section>
  );
};
