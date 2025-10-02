import { ServiceCard } from "./ServiceCard";
import { Brain, Sparkles, Code, TrendingUp } from "lucide-react";

export const WhatIOffer = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From systems to strategy — let's build the future together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Brain className="w-12 h-12" />}
            title="Life OS Coaching"
            description="Build your personalized Life Operating System with Notion dashboards, reflection systems, and digital habits that actually stick."
          />
          
          <ServiceCard
            icon={<Sparkles className="w-12 h-12" />}
            title="Custom GPT Design"
            description="Create powerful custom GPTs tailored to your workflow — from study helpers to business automation."
          />
          
          <ServiceCard
            icon={<Code className="w-12 h-12" />}
            title="Digital Confidence"
            description="Master AI literacy and productivity tools. No tech jargon, just practical skills that empower."
          />
          
          <ServiceCard
            icon={<TrendingUp className="w-12 h-12" />}
            title="Business Mentoring"
            description="Strategic guidance for young entrepreneurs and professionals navigating AI and digital transformation."
          />
        </div>
      </div>
    </section>
  );
};
