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
      "group hover:shadow-elegant transition-all duration-300 bg-card border-border shadow-soft",
      className
    )}>
      <CardContent className="p-10">
        <h3 className="text-2xl font-bold mb-5 text-foreground">{company}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-base">{description}</p>
        <div className="mb-6 p-5 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Impact</p>
          <p className="text-foreground font-medium">{impact}</p>
        </div>
        <div className="relative bg-primary/5 rounded-lg p-5 border-l-4 border-primary">
          <p className="text-foreground italic leading-relaxed">"{quote}"</p>
        </div>
      </CardContent>
    </Card>
  );
};
