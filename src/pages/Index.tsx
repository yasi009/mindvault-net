import { Hero } from "@/components/Hero";
import { ClientWork } from "@/components/ClientWork";
import { About } from "@/components/About";
import { WhatIOffer } from "@/components/WhatIOffer";
import { Workshops } from "@/components/Workshops";
import { FreeTools } from "@/components/FreeTools";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientWork />
      <About />
      <WhatIOffer />
      <Workshops />
      <FreeTools />
      <Footer />
    </div>
  );
};

export default Index;
