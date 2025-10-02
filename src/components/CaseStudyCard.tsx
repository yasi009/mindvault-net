import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  company: string;
  description: string;
  impact: string;
  quote: string;
  className?: string;
}

export const CaseStudyCard = ({ company, description, impact, quote, className }: CaseStudyCardProps) => {
  return (
    <Card className={cn(
      "group hover:scale-[1.02] transition-all duration-300 bg-gradient-card border-border shadow-soft hover:shadow-elegant",
      className
    )}>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-primary">{company}</h3>
        <p className="text-foreground mb-4 leading-relaxed">{description}</p>
        <div className="mb-4 p-4 bg-muted rounded-lg">
          <p className="text-sm font-semibold text-accent mb-2">Impact:</p>
          <p className="text-foreground">{impact}</p>
        </div>
        <div className="relative bg-secondary/20 rounded-xl p-4 border-l-4 border-secondary">
          <p className="text-foreground italic">"{quote}"</p>
        </div>
      </CardContent>
    </Card>
  );
};
