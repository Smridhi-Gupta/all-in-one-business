import BlogSection from "@/components/home/sections/BlogSection";
import FAQSection from "@/components/home/sections/FAQSection";
import Hero from "@/components/home/sections/Hero";
import InfinitySection from "@/components/home/sections/InfinitySection";
import NewsletterSection from "@/components/home/sections/NewsletterSection";
import PlatformIndustrySection from "@/components/home/sections/PlatformIndustrySection";
import Services from "@/components/home/sections/Services";
import ServiceTabs from "@/components/home/sections/ServiceTabs";
import StatsSection from "@/components/home/sections/StatsSection";
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
    </div>
  );
};

export default page;
