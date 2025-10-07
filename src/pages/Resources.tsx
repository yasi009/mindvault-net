import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FreeTools } from "@/components/FreeTools";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FreeTools />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
