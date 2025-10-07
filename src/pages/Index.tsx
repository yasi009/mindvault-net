import { Hero } from "@/components/Hero";
import { MyWhy } from "@/components/MyWhy";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ClientWork } from "@/components/ClientWork";
import { AudiencePackages } from "@/components/AudiencePackages";
import { FreeTools } from "@/components/FreeTools";
import { WorkshopsEvents } from "@/components/WorkshopsEvents";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MyWhy />
      <TestimonialsCarousel />
      <ClientWork />
      <WorkshopsEvents />
      <FreeTools />
      <AudiencePackages />
      <Footer />
    </div>
  );
};

export default Index;
