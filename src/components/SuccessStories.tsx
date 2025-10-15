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
      solution: "Led flagship 'Debunk, Demystify, Design' workshop series at NIDA Theatre, establishing ongoing community mentorship program ('Yeah the Girls'). Created sustainable peer-to-peer learning environment focused on AI literacy and STEM career pathways for young women.",
      impact: "Established thriving community of 50+ young women actively exploring STEM careers, with 90% of participants reporting increased confidence in technology fields and sustained engagement in ongoing mentorship programs.",
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
            <div 
              key={index} 
              className="group relative p-8 bg-card rounded-lg hover:shadow-elegant transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedStory(expandedStory === index ? null : index)}
            >
              <div className="space-y-6">
                {/* Client */}
                <h3 className="text-2xl font-bold text-foreground">{story.client}</h3>
                
                {/* Impact */}
                <p className="text-muted-foreground leading-relaxed">
                  {story.impact}
                </p>

                {/* Read More Button - appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button className="text-accent font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    {expandedStory === index ? "Show less" : "Read more"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Expandable content */}
                {expandedStory === index && (
                  <div className="space-y-6 pt-6 border-t border-border animate-fade-in">
                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">How We Did It</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {story.solution}
                      </p>
                    </div>

                    {/* Problem */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {story.problem}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {testimonials
            .sort((a, b) => a.quote.length - b.quote.length)
            .map((testimonial, index) => (
              <blockquote
                key={index}
                className="text-white/90 font-heading italic text-center"
                style={{ 
                  fontSize: `${1.5 + index * 0.3}rem`,
                }}
              >
                <span 
                  className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white/90 pr-1 animate-typing"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${2 + testimonial.quote.length * 0.03}s`
                  }}
                >
                  "{testimonial.quote}"
                </span>
                <footer className="text-white/70 text-base mt-2 not-italic font-heading">— {testimonial.author}</footer>
              </blockquote>
            ))}
        </div>
      </div>
    </section>
  );
};