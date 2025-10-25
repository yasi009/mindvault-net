import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  preferredDate: z.string().trim().min(1, "Please select your preferred day/time").max(100),
  purpose: z.string().trim().min(1, "Please share the purpose of your consultation").max(500),
});

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const ConsultationDialog = ({ open, onOpenChange, onSuccess }: ConsultationDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = consultationSchema.parse({ name, email, preferredDate, purpose });
      setIsSubmitting(true);

      const { error } = await supabase
        .from("consultation_bookings")
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          preferred_date: validatedData.preferredDate,
          purpose: validatedData.purpose,
        }]);

      if (error) throw error;

      setIsSuccess(true);
      onSuccess?.();
      
      toast({
        title: "Booking received!",
        description: "Our assistant will reach out to confirm and plan details.",
      });

      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setPreferredDate("");
        setPurpose("");
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit booking. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Free 15-Minute Fit Check</DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Thanks for booking!</h3>
            <p className="text-muted-foreground">
              Our assistant will reach out to confirm and plan details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="w-full"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full"
              />
            </div>

            <div>
              <Input
                placeholder="Preferred day/time (e.g., Monday 2pm, Thursday morning)"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
                maxLength={100}
                className="w-full"
              />
            </div>

            <div>
              <Textarea
                placeholder="What would you like to discuss? (e.g., Is Life OS right for me? How does onboarding work? Which package should I choose?)"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
                maxLength={500}
                rows={4}
                className="w-full resize-none"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book My Call"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
