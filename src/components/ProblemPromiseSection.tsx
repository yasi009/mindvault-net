import { useEffect, useRef, useState } from "react";

export const ProblemPromiseSection = () => {
  const [showProblem, setShowProblem] = useState(false);
  const [showPromise, setShowPromise] = useState(false);
  const problemRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const problemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowProblem(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const promiseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowPromise(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (problemRef.current) {
      problemObserver.observe(problemRef.current);
    }
    if (promiseRef.current) {
      promiseObserver.observe(promiseRef.current);
    }

    return () => {
      problemObserver.disconnect();
      promiseObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Problem Section */}
        <div
          ref={problemRef}
          className={`transition-all duration-1000 transform ${
            showProblem ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic text-center">
            The Problem
          </h3>
          <ul className="space-y-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-accent mr-4 font-bold text-2xl">•</span>
              <span className="font-semibold">Mental clutter: too many goals, tools, and tabs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-4 font-bold text-2xl">•</span>
              <span className="font-semibold">Inconsistent habits that don't stick</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-4 font-bold text-2xl">•</span>
              <span className="font-semibold">No clear system connecting values to action</span>
            </li>
          </ul>
        </div>

        {/* Promise Section */}
        <div
          ref={promiseRef}
          className={`transition-all duration-1000 transform ${
            showPromise ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } text-center`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground italic">
            The Promise: Clarity that sticks
          </h3>
          <p className="text-3xl md:text-4xl font-heading font-bold italic text-foreground leading-relaxed mb-6">
            <span className="bg-gradient-to-r from-accent via-rose to-primary bg-clip-text text-transparent">
              values → identity → habits → goals
            </span>
          </p>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium max-w-3xl mx-auto">
            A complete Life OS that aligns what you do with who you are—powered by AI, built in Notion.
          </p>
        </div>
      </div>
    </section>
  );
};
