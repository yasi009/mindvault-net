import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  pricing?: string;
  revenue?: string;
}

export const ServiceCard = ({ icon, title, description, className, pricing, revenue }: ServiceCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-all duration-300 bg-card border-border shadow-soft h-full",
      className
    )}>
      <CardContent className="p-8 h-full flex flex-col">
        <div className="mb-6 flex justify-center text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">{description}</p>
        
        {pricing && (
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Typical Investment</span>
              <Badge variant="secondary" className="font-semibold">{pricing}</Badge>
            </div>
            {revenue && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Revenue Generated</span>
                <span className="text-sm font-bold text-primary">{revenue}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
