import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AudiencePackages } from "@/components/AudiencePackages";
import { AudienceProvider } from "@/contexts/AudienceContext";

const Services = () => {
  return (
    <AudienceProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <section className="py-24 px-6 lg:px-12 bg-gradient-hero">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-hero font-display text-foreground mb-8">
                Systems That <span className="bg-gradient-warm bg-clip-text text-transparent">Transform</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Whether you're a student, educator, or executive — I design Life Operating Systems tailored to your unique challenges and goals.
              </p>
            </div>
          </section>
          <AudiencePackages />
        </div>
        <Footer />
      </div>
    </AudienceProvider>
  );
};

export default Services;
