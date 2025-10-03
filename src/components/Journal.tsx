import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";

export const Journal = () => {
  const posts = [
    {
      title: "Why I built a Life OS (and why you should too)",
      excerpt: "Systems > willpower. Here's how I turned chaos into clarity with Notion.",
      readTime: "3 min read"
    },
    {
      title: "Using AI as a thinking partner, not a shortcut",
      excerpt: "The best use of GPT isn't to do your work — it's to help you think better.",
      readTime: "4 min read"
    },
    {
      title: "How I run my weekly review (and actually stick to it)",
      excerpt: "The ritual that changed everything: 20 minutes, 5 questions, total clarity.",
      readTime: "5 min read"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Notes From the Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Short reflections on systems, identity, and using AI to think better.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border">
              <CardContent className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
