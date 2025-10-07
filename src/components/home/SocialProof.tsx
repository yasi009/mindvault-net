import { Card } from "@/components/ui/card";
import { SpeechBubble } from "@/components/SpeechBubble";

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "Before working with Yaseerah, I felt like I was always playing catch-up. Now I have a system that thinks with me, not against me.",
      author: "Sarah Chen, PhD Candidate"
    },
    {
      quote: "I went from drowning in lesson plans to having a teaching system that actually scales. My students notice the difference.",
      author: "Marcus Rodriguez, High School Educator"
    },
    {
      quote: "The custom AI tools she built for our team cut decision-making time by 60%. But more importantly, we feel in control again.",
      author: "Jennifer Park, VP of Operations"
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(25 85% 65%) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-section font-display text-foreground mb-6">
            Transformations That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people. Real shifts. Real systems that actually work.
          </p>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <SpeechBubble
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              variant={index % 2 === 0 ? "left" : "right"}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
