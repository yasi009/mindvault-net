import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: '#773260' }}
    >
      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-end px-6 sm:px-10 md:px-16 lg:px-20 pt-24 sm:pt-32 pb-8 lg:pb-16">
        {/* Left side - Main headline */}
        <div className="flex-1">
          <h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight"
            style={{ color: '#ffecf0' }}
          >
            Design
            <br />
            your
            <br />
            Life OS.
          </h1>
        </div>

        {/* Right side - Subtitle and button */}
        <div className="mt-12 lg:mt-0 lg:max-w-md lg:text-right">
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: '#ffecf0', opacity: 0.9 }}
          >
            A Notion-based, AI-guided system that turns values into habits, habits into goals, and goals into results.
          </p>
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-8"
            style={{ color: '#ffecf0', opacity: 0.7 }}
          >
            Think clearly.
            <br />
            Act intentionally.
          </p>
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/get-life-os'}
            className="border-[#ffecf0] text-[#ffecf0] hover:bg-[#ffecf0] hover:text-[#773260] transition-all duration-300 rounded-full px-6"
          >
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            Learn more
          </Button>
        </div>
      </div>

      {/* Bottom arrow indicator */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 pb-8 sm:pb-12">
        <button 
          onClick={scrollToContent}
          className="group cursor-pointer transition-transform duration-300 hover:translate-y-1"
          aria-label="Scroll down"
        >
          <ArrowDownRight 
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-300 group-hover:scale-110"
            style={{ color: '#ffecf0' }}
            strokeWidth={1}
          />
        </button>
      </div>
    </section>
  );
};
