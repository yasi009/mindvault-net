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
      // Progress goes from 0 to 1 as user scrolls through hero
      const progress = Math.min(1, Math.max(0, -rect.top / (viewportHeight * 0.7)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Start at 75% drawn, complete with minimal scroll (by 15% scroll progress)
  const baseProgress = 0.75;
  const remainingProgress = Math.min(0.25, scrollProgress * 1.5);
  const totalProgress = baseProgress + remainingProgress;
  const strokeDashoffset = 1392 - (totalProgress * 1392);

  // Calculate orange color based on scroll progress
  const lifeOSColor = scrollProgress > 0.05 ? 'hsl(var(--accent))' : '#ffecf0';

  return (
    <>
      {/* DDD Banner - not sticky */}
      <div 
        className="absolute top-14 sm:top-16 left-0 right-0 z-40 w-full py-3 sm:py-4 text-center border-b"
        style={{ 
          backgroundColor: '#773260',
          borderColor: 'rgba(255, 236, 240, 0.2)'
        }}
      >
        <p 
          className="font-heading text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase"
          style={{ color: '#ffecf0' }}
        >
          Debunk. Demystify. Design.
        </p>
      </div>

      <section 
        ref={sectionRef}
        className="relative min-h-screen flex flex-col overflow-hidden pt-12 sm:pt-14"
        style={{ backgroundColor: '#773260' }}
      >
        {/* Main content area */}
        <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-end px-6 sm:px-10 md:px-16 lg:px-20 pt-16 sm:pt-24 pb-8 lg:pb-16">
          {/* Left side - Main headline with animated frame */}
          <div className="flex-1 relative">
            {/* Animated SVG Frame - scroll-based drawing */}
            <div 
              className={`absolute pointer-events-none transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                top: '-1.5rem',
                left: '-1.5rem',
                right: '-1.5rem',
                bottom: '-1.5rem',
              }}
            >
              <svg 
                className="w-full h-full"
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {/* Metallic gradient for 3D beveled look */}
                  <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffcc80" />
                    <stop offset="25%" stopColor="hsl(var(--accent))" />
                    <stop offset="50%" stopColor="#ffe0b3" />
                    <stop offset="75%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="#cc8800" />
                  </linearGradient>
                  <linearGradient id="innerFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffe0b3" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="#ffcc80" />
                  </linearGradient>
                </defs>
                
                {/* Outer sharp-edged animated stroke frame */}
                <rect 
                  x="2" y="2" 
                  width="396" height="296" 
                  rx="0"
                  fill="none"
                  stroke="url(#frameGradient)"
                  strokeWidth="2.5"
                  strokeLinejoin="miter"
                  style={{
                    strokeDasharray: 1392,
                    strokeDashoffset: strokeDashoffset,
                    transition: 'stroke-dashoffset 0.1s ease-out',
                  }}
                />
                
                {/* Inner thinner animated stroke frame */}
                <rect 
                  x="8" y="8" 
                  width="384" height="284" 
                  rx="0"
                  fill="none"
                  stroke="url(#innerFrameGradient)"
                  strokeWidth="1"
                  strokeLinejoin="miter"
                  style={{
                    strokeDasharray: 1336,
                    strokeDashoffset: 1336 - (totalProgress * 1336),
                    transition: 'stroke-dashoffset 0.1s ease-out',
                  }}
                />
              </svg>
            </div>

            <h1 
              className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight relative z-10 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#ffecf0' }}
            >
              Design
              <br />
              your
              <br />
              <span style={{ color: lifeOSColor, transition: 'color 0.4s ease-out' }}>Life OS.</span>
            </h1>
          </div>

          {/* Right side - Tagline and link */}
          <div 
            className={`mt-16 lg:mt-0 lg:max-w-md lg:text-right transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <p 
              className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 uppercase italic font-bold tracking-wide"
              style={{ color: '#ffecf0' }}
            >
              Think Clearly.
              <br />
              Act Intentionally.
            </p>
            <Link 
              to="/get-life-os"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium transition-colors duration-300 hover:opacity-80"
              style={{ color: 'rgba(255, 236, 240, 0.6)' }}
            >
              Learn more
              <ArrowRight 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom arrow indicator */}
        <div 
          className={`px-6 sm:px-10 md:px-16 lg:px-20 pb-8 sm:pb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <button 
            onClick={scrollToContent}
            className="group cursor-pointer transition-transform duration-300 hover:translate-y-1"
            aria-label="Scroll down"
          >
            <ArrowRight 
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rotate-90 transition-all duration-300 group-hover:scale-110"
              style={{ color: '#ffecf0' }}
              strokeWidth={1}
            />
          </button>
        </div>
      </section>
    </>
  );
};
