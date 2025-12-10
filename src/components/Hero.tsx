import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
      const progress = Math.min(1, Math.max(0, -rect.top / viewportHeight));
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

  // Parallax offset based on scroll
  const parallaxOffset = scrollProgress * 20;
  const glassOpacity = Math.min(0.3, scrollProgress * 0.5);
  const metallicIntensity = Math.min(1, scrollProgress * 1.5);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#773260' }}
    >
      {/* DDD Banner */}
      <div 
        className="w-full py-3 sm:py-4 text-center border-b"
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

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-end px-6 sm:px-10 md:px-16 lg:px-20 pt-16 sm:pt-24 pb-8 lg:pb-16">
        {/* Left side - Main headline with animated frame */}
        <div className="flex-1 relative">
          {/* Animated SVG Frame */}
          <div 
            className={`absolute pointer-events-none transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              top: '-1rem',
              left: '-1rem',
              right: '-1rem',
              bottom: '-1rem',
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <svg 
              className="w-full h-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Gradient for metallic effect */}
                <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.8 + metallicIntensity * 0.2} />
                  <stop offset="25%" stopColor="#ffb347" stopOpacity={0.6 + metallicIntensity * 0.4} />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity={0.9} />
                  <stop offset="75%" stopColor="#ff8c00" stopOpacity={0.7 + metallicIntensity * 0.3} />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0.8 + metallicIntensity * 0.2} />
                </linearGradient>
                
                {/* Noise filter for organic shimmer */}
                <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale={2 + metallicIntensity * 3} />
                </filter>
                
                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation={3 + metallicIntensity * 5} result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Glassmorphism blur */}
                <filter id="glass" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation={glassOpacity * 10} />
                </filter>
              </defs>
              
              {/* Background glass effect on scroll */}
              {scrollProgress > 0.05 && (
                <rect 
                  x="2" y="2" 
                  width="396" height="296" 
                  rx="4"
                  fill={`rgba(255, 165, 0, ${glassOpacity * 0.1})`}
                  style={{
                    backdropFilter: `blur(${glassOpacity * 20}px)`,
                  }}
                />
              )}
              
              {/* Main animated stroke frame */}
              <rect 
                x="2" y="2" 
                width="396" height="296" 
                rx="4"
                fill="none"
                stroke="url(#metallicGradient)"
                strokeWidth={2 + metallicIntensity}
                filter={scrollProgress > 0.1 ? "url(#glow)" : undefined}
                className={isVisible ? 'frame-draw' : ''}
                style={{
                  strokeDasharray: 1392,
                  strokeDashoffset: isVisible ? 0 : 1392,
                }}
              />
              
              {/* Specular highlight lines */}
              {scrollProgress > 0.1 && (
                <>
                  <line 
                    x1="2" y1="2" 
                    x2="100" y2="2" 
                    stroke={`rgba(255, 255, 255, ${0.3 * metallicIntensity})`}
                    strokeWidth="1"
                    style={{
                      transform: `translateX(${parallaxOffset * 2}px)`,
                    }}
                  />
                  <line 
                    x1="2" y1="2" 
                    x2="2" y2="80" 
                    stroke={`rgba(255, 255, 255, ${0.25 * metallicIntensity})`}
                    strokeWidth="1"
                  />
                  <line 
                    x1="300" y1="298" 
                    x2="398" y2="298" 
                    stroke={`rgba(255, 200, 150, ${0.2 * metallicIntensity})`}
                    strokeWidth="1"
                    style={{
                      transform: `translateX(${-parallaxOffset * 1.5}px)`,
                    }}
                  />
                </>
              )}
            </svg>
            
            {/* Holographic reflection overlay */}
            {scrollProgress > 0.15 && (
              <div 
                className="absolute inset-0 pointer-events-none rounded"
                style={{
                  background: `linear-gradient(
                    ${135 + parallaxOffset * 2}deg, 
                    transparent 0%, 
                    rgba(255, 180, 100, ${0.05 * metallicIntensity}) 25%,
                    rgba(255, 140, 0, ${0.08 * metallicIntensity}) 50%,
                    rgba(255, 200, 150, ${0.05 * metallicIntensity}) 75%,
                    transparent 100%
                  )`,
                  opacity: metallicIntensity,
                }}
              />
            )}
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
            Life OS.
          </h1>
        </div>

        {/* Right side - Tagline and button */}
        <div 
          className={`mt-12 lg:mt-0 lg:max-w-md lg:text-right transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <p 
            className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 uppercase italic font-bold tracking-wide"
            style={{ color: '#ffecf0' }}
          >
            Think Clearly.
            <br />
            Act Intentionally.
          </p>
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/get-life-os'}
            className="border-[#ffecf0] text-accent hover:bg-[#ffecf0] hover:text-[#773260] transition-all duration-300 rounded-full px-6 font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            Learn more
          </Button>
        </div>
      </div>

      {/* Bottom arrow indicator */}
      <div 
        className={`px-6 sm:px-10 md:px-16 lg:px-20 pb-8 sm:pb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '0.5s' }}
      >
        <button 
          onClick={scrollToContent}
          className="group cursor-pointer transition-transform duration-300 hover:translate-y-1"
          aria-label="Scroll down"
        >
          <ArrowDownRight 
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-110"
            style={{ color: '#ffecf0' }}
            strokeWidth={1}
          />
        </button>
      </div>

      <style>{`
        .frame-draw {
          animation: drawFrame 1.5s ease-out forwards;
          animation-delay: 0.4s;
        }
        
        @keyframes drawFrame {
          from {
            stroke-dashoffset: 1392;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};
