import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
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
          {/* Animated orange frame */}
          <div 
            className={`absolute -inset-4 sm:-inset-6 md:-inset-8 pointer-events-none transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div 
              className="absolute inset-0 border-2 sm:border-3 md:border-4"
              style={{ 
                borderColor: 'hsl(var(--accent))',
                boxShadow: '0 0 20px rgba(255, 165, 0, 0.3), inset 0 0 20px rgba(255, 165, 0, 0.1)',
                background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, transparent 50%, rgba(255, 165, 0, 0.05) 100%)'
              }}
            />
            {/* Reflective shine effect */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)',
                animation: 'shine 3s ease-in-out infinite',
              }}
            />
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
        @keyframes shine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
