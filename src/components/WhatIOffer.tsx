import { ServiceCard } from "./ServiceCard";
import { Brain, Sparkles, Code, TrendingUp } from "lucide-react";

export const WhatIOffer = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for individuals and organizations seeking digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Brain className="w-12 h-12" />}
            title="Life Operating System Design"
            description="Develop personalized digital frameworks using Notion, automation tools, and systematic workflows that enhance productivity and decision-making capabilities."
            pricing="$500 - $2,000"
            revenue="$12,000+ generated"
          />
          
          <ServiceCard
            icon={<Sparkles className="w-12 h-12" />}
            title="Custom GPT Development"
            description="Design and implement specialized AI assistants tailored to your unique requirements—from research tools to business process automation."
            pricing="$300 - $1,500"
            revenue="$8,500+ generated"
          />
          
          <ServiceCard
            icon={<Code className="w-12 h-12" />}
            title="AI Literacy Training"
            description="Comprehensive workshops and coaching on AI tools, prompt engineering, and digital productivity—delivered in accessible, practical formats."
            pricing="$400 - $1,200"
            revenue="$15,000+ generated"
          />
          
          <ServiceCard
            icon={<TrendingUp className="w-12 h-12" />}
            title="Strategic Consulting"
            description="One-on-one guidance for professionals and organizations navigating digital transformation, AI integration, and productivity optimization."
            pricing="$800 - $3,000"
            revenue="$18,000+ generated"
          />
        </div>
      </div>
    </section>
  );
};
