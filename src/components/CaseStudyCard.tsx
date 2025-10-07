import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CaseStudyCardProps {
  company: string;
  description: string;
  impact: string;
  quote: string;
  className?: string;
  image?: string;
  pricing?: string;
  metrics?: string[];
}

export const CaseStudyCard = ({ 
  company, 
  description, 
  impact, 
  quote, 
  className, 
  image, 
  pricing,
  metrics 
}: CaseStudyCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-all duration-300 bg-card border-border shadow-soft overflow-hidden",
      className
    )}>
      {image && (
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={image} 
            alt={company} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          {pricing && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-2 text-sm">
                {pricing}
              </Badge>
            </div>
          )}
        </div>
      )}
      <CardContent className="p-10">
        <h3 className="text-2xl font-bold mb-5 text-foreground">{company}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-base">{description}</p>
        
        {metrics && metrics.length > 0 && (
          <div className="mb-6 space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{metric}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="mb-6 p-5 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Project Impact</p>
          <p className="text-foreground font-medium">{impact}</p>
        </div>
        <div className="relative bg-primary/5 rounded-lg p-5 border-l-4 border-primary">
          <p className="text-foreground italic leading-relaxed">"{quote}"</p>
        </div>
      </CardContent>
    </Card>
  );
};
