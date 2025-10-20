import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Using consultation_bookings table with message as purpose
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([
          {
            name,
            email,
            purpose: message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic uppercase">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform confusion into clarity? Reach out and let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project, challenge, or question..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border">
              <Calendar className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Book a Discovery Call</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Prefer a conversation? Schedule a 15-minute clarity session to discuss your needs.
              </p>
              <Button size="lg" onClick={() => setConsultationOpen(true)} className="w-full">
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Direct Contact</h3>
              
              <a 
                href="mailto:yaseerah@mindvault.com.au" 
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-shadow group"
              >
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">
                    yaseerah@mindvault.com.au
                  </div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/yaseerahmirza" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-shadow group"
              >
                <Linkedin className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">
                    Connect with Yaseerah
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Response time:</strong> We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      <Footer />
    </div>
  );
};

export default Contact;
