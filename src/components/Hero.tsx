import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / (viewportHeight * 0.7)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const baseProgress = 0.75;
  const remainingProgress = Math.min(0.25, scrollProgress * 1.5);
  const totalProgress = baseProgress + remainingProgress;

  // Surrounding text fades from light pink to deep plum (#773260) on scroll
  const dimmedTextColor = scrollProgress > 0.05 ? "#773260" : "#ffecf0";
  // "get ahead" lights up orange (accent) on scroll
  const highlightColor = scrollProgress > 0.05 ? "hsl(var(--accent))" : "#ffecf0";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#773260" }}
    >
      <div className="flex-1 flex flex-col justify-between items-start px-6 sm:px-10 md:px-12 lg:px-16 pt-24 sm:pt-32 pb-16 lg:pb-24 w-full">
        {/* Left-aligned headline box */}
        <div className="flex-1 relative max-w-3xl">
          <div
            className={`absolute pointer-events-none transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: "-1.5rem",
              left: "-1.5rem",
              right: "-1.5rem",
              bottom: "-1.5rem",
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient id="innerFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffe0b3" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="#ffcc80" />
                </linearGradient>
              </defs>
              <rect
                x="8"
                y="8"
                width="384"
                height="284"
                rx="0"
                fill="none"
                stroke="url(#innerFrameGradient)"
                strokeWidth="1"
                strokeLinejoin="miter"
                style={{
                  strokeDasharray: 1336,
                  strokeDashoffset: 1336 - totalProgress * 1336,
                  transition: "stroke-dashoffset 0.1s ease-out",
                }}
              />
            </svg>
          </div>

          <h1
            className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold leading-[0.95] tracking-tight relative z-10 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ color: "#ffecf0" }}
          >
            The window to get ahead
            <br />
            <span style={{ color: accentColor, transition: "color 0.4s ease-out" }}>is open.</span>
            <br />
            <span style={{ color: "#ffecf0" }}>It won't stay that way.</span>
          </h1>
        </div>

        {/* Subheadline and CTAs positioned under the headline box */}
        <div
          className={`mt-12 lg:mt-8 max-w-3xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p
            className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-medium"
            style={{ color: "#ffecf0" }}
          >
            MindVault helps UAE educational institutions deploy AI with governance, confidence, and full documentation — from pilot to policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="text-sm sm:text-base font-medium underline-offset-4 hover:underline"
              style={{ color: "#ffecf0" }}
            >
              See our services →
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`px-6 sm:px-10 md:px-16 lg:px-20 pb-8 sm:pb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "0.8s" }}
      >
        <button
          onClick={scrollToContent}
          className="group cursor-pointer transition-transform duration-300 hover:translate-y-1"
          aria-label="Scroll down"
        >
          <ArrowRight
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rotate-90 transition-all duration-300 group-hover:scale-110"
            style={{ color: "#ffecf0" }}
            strokeWidth={1}
          />
        </button>
      </div>
    </section>
  );
};
