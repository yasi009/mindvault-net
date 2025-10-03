import { Hero } from "@/components/Hero";
import { ClientWork } from "@/components/ClientWork";
import { WhatIOffer } from "@/components/WhatIOffer";
import { Workshops } from "@/components/Workshops";
import { FreeTools } from "@/components/FreeTools";
import { Journal } from "@/components/Journal";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientWork />
      <WhatIOffer />
      <Workshops />
      <FreeTools />
      <Journal />
      <Footer />
    </div>
  );
};

export default Index;
