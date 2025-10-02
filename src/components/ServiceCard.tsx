import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
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
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};
