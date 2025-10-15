import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  quote: string;
  author: string;
  className?: string;
  variant?: "left" | "right";
  glass?: boolean;
}

export const SpeechBubble = ({ quote, author, className, variant = "left", glass = false }: SpeechBubbleProps) => {
  return (
    <div className={cn("animate-fade-in", className)}>
      <div className={cn(
        "relative rounded-2xl p-6 border max-w-md",
        glass ? "bg-white/20 backdrop-blur-md border-white/30 shadow-glass" : "bg-card shadow-speech border-border",
        variant === "right" && "ml-auto"
      )}>
        <p className={cn("italic mb-2", glass ? "text-white" : "text-foreground")}>"{quote}"</p>
        <p className={cn("text-sm", glass ? "text-white/80" : "text-muted-foreground")}>— {author}</p>
        
        {/* Speech bubble tail */}
        <div className={cn(
          "absolute bottom-0 w-0 h-0",
          variant === "left" ? "-left-3" : "-right-3",
          glass ? 
            (variant === "left" ? "border-t-[20px] border-r-[20px] border-t-white/20 border-r-transparent" :
            "border-t-[20px] border-l-[20px] border-t-white/20 border-l-transparent") :
            (variant === "left" ? "border-t-[20px] border-r-[20px] border-t-card border-r-transparent" :
            "border-t-[20px] border-l-[20px] border-t-card border-l-transparent")
        )}></div>
      </div>
    </div>
  );
};
