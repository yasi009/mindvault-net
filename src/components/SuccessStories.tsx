import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Story {
  problem: string;
  solution: string;
  impact: string;
  client: string;
}

export const SuccessStories = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  
  const stories: Story[] = [
    {
      problem: "Young women felt like STEM wasn't for them. They lacked confidence, community, and role models.",
      solution: "We created 'Debunk, Demystify, Design' — a workshop series that makes tech feel personal, not intimidating. Then we kept showing up with mentorship.",
      impact: "50+ young women found their people. 90% said they now see themselves in STEM. The community is still growing.",
      client: "Girls in STEM Initiative (NIDA Theatre)"
    },
    {
      problem: "Students were disengaged with traditional teaching methods and lacked practical tech skills.",
      solution: "We designed interactive workshops that combined hands-on learning with real-world applications, making technology accessible and exciting.",
      impact: "Students gained confidence in tech skills, improved engagement in STEM subjects, and developed practical problem-solving abilities.",
      client: "UNSW & High School Workshops"
    }
  ];
  
  const testimonials = [
    { quote: "This changed everything.", author: "Student" },
    { quote: "I finally understand why this matters.", author: "Workshop Participant" },
    { quote: "You made me feel like I could actually do this. I'm not scared anymore.", author: "High School Student" }
  ];

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Student Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real people. Real breakthroughs. Real change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-none bg-white/95">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Impact - Main subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{story.impact}</h3>
                  </div>

                  {/* Expandable content */}
                  {expandedStory === index && (
                    <>
                      {/* Problem */}
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                            P
                          </div>
                          <h4 className="font-semibold text-foreground">Problem</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed ml-10">
                          {story.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            S
                          </div>
                          <h4 className="font-semibold text-foreground">Solution</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed ml-10">
                          {story.solution}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Client & Read More */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      — {story.client}
                    </p>
                    <button
                      onClick={() => setExpandedStory(expandedStory === index ? null : index)}
                      className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {expandedStory === index ? "Show less" : "Read more"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {testimonials
            .sort((a, b) => a.quote.length - b.quote.length)
            .map((testimonial, index) => (
              <blockquote
                key={index}
                className="text-white/90 font-heading italic text-center animate-fade-in"
                style={{ 
                  fontSize: `${1.5 + index * 0.3}rem`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                "{testimonial.quote}"
                <footer className="text-white/70 text-base mt-2 not-italic font-heading">— {testimonial.author}</footer>
              </blockquote>
            ))}
        </div>
      </div>
    </section>
  );
};