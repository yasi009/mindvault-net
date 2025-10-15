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
        "relative p-6 border min-w-[400px]",
        glass ? "bg-white/20 backdrop-blur-md border-white/30 shadow-glass" : "bg-card shadow-speech border-border",
        variant === "right" && "ml-auto"
      )}>
        <p className={cn("italic mb-2 font-heading", glass ? "text-white" : "text-foreground")}>"{quote}"</p>
        <p className={cn("text-sm font-heading", glass ? "text-white/80" : "text-muted-foreground")}>— {author}</p>
      </div>
    </div>
  );
};
