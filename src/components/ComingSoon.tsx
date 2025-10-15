import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";

export const ComingSoon = () => {
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  
  return <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-peach-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-foreground">November 2025</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-foreground px-4">Coming Soon: ISRA Academy Workshop</h2>
        
        <p className="text-xs sm:text-sm text-muted-foreground mb-6">Level 3/128-136 S Parade, Auburn NSW 2144</p>
        
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Join us this November for a powerful session on clarity, consciousness, and creating systems for your real self.
        </p>
        
        <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" onClick={() => setTicketDialogOpen(true)}>
          Get Tickets
        </Button>
      </div>
      
      <ToolSignupDialog 
        open={ticketDialogOpen}
        onOpenChange={setTicketDialogOpen}
        toolName="ISRA Academy Workshop Tickets"
        delayedDelivery={true}
      />
    </section>;
};