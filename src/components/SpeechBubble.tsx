import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  quote: string;
  author: string;
  className?: string;
  variant?: "left" | "right";
  style?: React.CSSProperties;
}

export const SpeechBubble = ({ quote, author, className, variant = "left", style }: SpeechBubbleProps) => {
  return (
    <div className={cn("animate-fade-in", className)} style={style}>
      <div className={cn(
        "relative bg-card rounded-2xl p-6 shadow-speech border border-border max-w-md",
        variant === "right" && "ml-auto"
      )}>
        <p className="text-foreground italic mb-2">"{quote}"</p>
        <p className="text-muted-foreground text-sm">— {author}</p>
        
        {/* Speech bubble tail */}
        <div className={cn(
          "absolute bottom-0 w-0 h-0",
          variant === "left" ? "-left-3 border-t-[20px] border-r-[20px] border-t-card border-r-transparent" :
          "-right-3 border-t-[20px] border-l-[20px] border-t-card border-l-transparent"
        )}></div>
      </div>
    </div>
  );
};
