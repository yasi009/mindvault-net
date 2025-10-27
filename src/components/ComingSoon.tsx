import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";
import israLogo from "@/assets/isra-logo.png";

export const ComingSoon = () => {
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  
  return <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-peach-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img src={israLogo} alt="ISRA - Islamic Sciences & Research Academy Australia" className="h-16 sm:h-20 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">Hosted by ISRA Sydney</p>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground px-4">Debunk, Demystify, Design</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-sm sm:text-base text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span>Sunday, 23rd November 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span>12:00 PM - 1:30 PM</span>
          </div>
        </div>
        
        <div className="flex items-start justify-center gap-2 mb-8 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
          <span>ISRA Sydney, Level 3/128-136 S Parade, Auburn NSW 2144</span>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Join us for a powerful 90-minute session on clarity, consciousness, and creating systems that work for your real self.
        </p>
        
        <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" onClick={() => setTicketDialogOpen(true)}>
          Get Tickets
        </Button>
      </div>
      
      <ToolSignupDialog 
        open={ticketDialogOpen}
        onOpenChange={setTicketDialogOpen}
        toolName="Debunk, Demystify, Design Workshop Tickets"
        delayedDelivery={true}
      />
    </section>;
};