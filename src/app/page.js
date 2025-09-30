// import Brands from "@/components/home/sections/Brands";
import BringIntelligence from "@/components/home/sections/BringIntelligence";
import CustomerStories from "@/components/home/sections/CustomerStories ";
import Hero from "@/components/home/sections/Hero";
import OnePlatform from "@/components/home/sections/OnePlatform";
import ServiceHighlights from "@/components/home/sections/ServiceHighlights";
import Services from "@/components/home/sections/Services";
// import StatsAchievements from "@/components/home/sections/StatsAchievements";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <Brands /> */}
      <ServiceHighlights />
      <Services />
      <BringIntelligence />
      {/* <StatsAchievements /> */}
      <OnePlatform />
      <CustomerStories />
    </div>
  );
};

export default page;
