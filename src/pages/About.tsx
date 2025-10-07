import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About as AboutComponent } from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutComponent />
      </div>
      <Footer />
    </div>
  );
};

export default About;
