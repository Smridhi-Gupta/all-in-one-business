// import Brands from "@/components/home/sections/Brands";
// import BringIntelligence from "@/components/home/sections/BringIntelligence";
// import CustomerStories from "@/components/home/sections/CustomerStories ";
import BlogSection from "@/components/home/sections/BlogSection";
import FAQSection from "@/components/home/sections/FAQSection";
import Hero from "@/components/home/sections/Hero";
import InfinitySection from "@/components/home/sections/InfinitySection";
import NewsletterSection from "@/components/home/sections/NewsletterSection";
import PlatformIndustrySection from "@/components/home/sections/PlatformIndustrySection";
import Services from "@/components/home/sections/Services";
import ServiceTabs from "@/components/home/sections/ServiceTabs";
import StatsSection from "@/components/home/sections/StatsSection";
// import OnePlatform from "@/components/home/sections/OnePlatform";
// import ServiceHighlights from "@/components/home/sections/ServiceHighlights";
// import Services from "@/components/home/sections/Services";
// import StatsAchievements from "@/components/home/sections/StatsAchievements";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ServiceTabs />
      <InfinitySection />
      <PlatformIndustrySection />
      <FAQSection />
      <BlogSection />
      <StatsSection />
      <NewsletterSection />
      {/* <Brands /> */}
      {/* <ServiceHighlights /> */}
      {/* <Services /> */}
      {/* <BringIntelligence /> */}
      {/* <StatsAchievements /> */}
      {/* <OnePlatform /> */}
      {/* <CustomerStories /> */}
    </div>
  );
};

export default page;
