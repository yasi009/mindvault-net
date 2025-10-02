import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  example?: string;
  className?: string;
}

export const ServiceCard = ({ icon, title, description, example, className }: ServiceCardProps) => {
  return (
    <Card className={cn(
      "group hover:scale-105 transition-all duration-300 bg-gradient-card border-border shadow-soft hover:shadow-elegant",
      className
    )}>
      <CardContent className="p-8 text-center">
        <div className="mb-4 flex justify-center text-primary group-hover:animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-3">{description}</p>
        {example && (
          <p className="text-sm text-primary/70 italic">{example}</p>
        )}
      </CardContent>
    </Card>
  );
};
