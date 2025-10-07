import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "You made me feel like I could actually do this.",
    author: "Student",
    bg: "bg-card"
  },
  {
    quote: "This gave me energy and hope for my classroom.",
    author: "Educator",
    bg: "bg-muted/30"
  },
  {
    quote: "This changed how I lead.",
    author: "Executive",
    bg: "bg-card"
  },
  {
    quote: "I thought AI was scary; you made it simple.",
    author: "Workshop Attendee",
    bg: "bg-muted/30"
  },
  {
    quote: "Finally, someone who understands both strategy and implementation.",
    author: "Operations Director",
    bg: "bg-card"
  },
  {
    quote: "This changed how I organize my entire student life.",
    author: "High School Student",
    bg: "bg-muted/30"
  }
];

export const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What People Are Saying
          </h2>
        </div>

        <div className="relative h-64 flex items-center justify-center overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${testimonial.bg} border-border shadow-soft ${
                index === activeIndex
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-95 z-0'
              }`}
            >
              <div className="p-10 text-center max-w-2xl">
                <p className="text-2xl text-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};