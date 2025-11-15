import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { ToolSignupDialog } from "./ToolSignupDialog";
import israLogo from "@/assets/isra-logo.png";

export const ComingSoon = () => {
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  
  return <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-peach-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-5 sm:mb-6">
          <img src={israLogo} alt="ISRA - Islamic Sciences & Research Academy Australia" className="h-12 sm:h-14 md:h-16 lg:h-20 mx-auto mb-3 sm:mb-4" />
          <p className="text-xs sm:text-sm text-muted-foreground">Hosted by ISRA Sydney</p>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-foreground px-2 sm:px-4">Debunk, Demystify, Design</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-7 md:mb-8 text-xs sm:text-sm md:text-base text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="text-center sm:text-left">Sunday, 23rd November 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span>12:00 PM - 1:30 PM</span>
          </div>
        </div>
        
        <div className="flex items-start justify-center gap-2 mb-6 sm:mb-7 md:mb-8 text-xs sm:text-sm text-muted-foreground px-4">
          <MapPin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-center sm:text-left">ISRA Sydney, Level 3/128-136 S Parade, Auburn NSW 2144</span>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
          Join us for a powerful 90-minute session on clarity, consciousness, and creating systems that work for your real self.
        </p>
        
        <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto" asChild>
          <a href="https://www.isra.org.au/events/debunk-demystify-design/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
            Get Tickets
          </a>
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