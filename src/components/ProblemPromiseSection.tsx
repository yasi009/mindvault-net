import { useEffect, useRef, useState } from "react";

export const ProblemPromiseSection = () => {
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowContent(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              showContent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic">
              The Problem
            </h3>
            <ul className="space-y-6 text-base md:text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold text-xl">•</span>
                <span className="font-semibold">Mental clutter: too many goals, tools, and tabs</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold text-xl">•</span>
                <span className="font-semibold">Inconsistent habits that don't stick</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold text-xl">•</span>
                <span className="font-semibold">No clear system connecting values to action</span>
              </li>
            </ul>
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-300 transform ${
              showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic">
              The Promise: Clarity that sticks
            </h3>
            <p className="text-3xl md:text-4xl font-heading font-bold italic text-foreground leading-relaxed mb-6">
              <span className="bg-gradient-to-r from-accent via-rose to-primary bg-clip-text text-transparent">
                values → identity → habits → goals
              </span>
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
              A complete Life OS that aligns what you do with who you are—powered by AI, built in Notion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
