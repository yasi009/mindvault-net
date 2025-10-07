import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WorkshopsEvents } from "@/components/WorkshopsEvents";

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <WorkshopsEvents />
      </div>
      <Footer />
    </div>
  );
};

export default Workshops;
