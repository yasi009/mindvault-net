import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ClientWork } from "@/components/ClientWork";

const Work = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ClientWork />
      </div>
      <Footer />
    </div>
  );
};

export default Work;
