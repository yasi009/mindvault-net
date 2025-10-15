import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
});

interface ToolSignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  toolName: string;
  onSuccess?: () => void;
  delayedDelivery?: boolean; // If true, shows "will be emailed" message instead of "instant access"
}

export const ToolSignupDialog = ({ open, onOpenChange, toolName, onSuccess, delayedDelivery = false }: ToolSignupDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const validation = signupSchema.safeParse({ name, email });
    if (!validation.success) {
      toast({
        title: "Invalid input",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("tool_signups")
        .insert({
          name: validation.data.name,
          email: validation.data.email,
          tool_name: toolName,
        });

      if (error) throw error;

      toast({
        title: "Success! 🎉",
        description: delayedDelivery 
          ? "You'll receive an email once the resource is ready." 
          : "Check your email for the download link.",
      });

      // Reset form and close dialog
      setName("");
      setEmail("");
      onOpenChange(false);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{delayedDelivery ? "Get Notified" : "Get Instant Access"}</DialogTitle>
          <DialogDescription>
            {delayedDelivery 
              ? "Enter your name & email. We'll send you the resource once it's polished and ready. No spam. Unsubscribe anytime."
              : "Enter your name & email to receive the download link. No spam. Unsubscribe anytime."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : (delayedDelivery ? "Notify Me" : "Get Access")}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            {delayedDelivery 
              ? "You'll be notified when it's ready."
              : "I send updates + fixes to your template/GPT."}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
