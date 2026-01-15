import AccomplishmentsSection from '@/components/category/AccomplishmentsSection'
import FAQSection from '@/components/category/FAQSection'
import Hero from '@/components/category/Hero'
import IndustriesSection from '@/components/category/IndustriesSection'
import ServicesOverview from '@/components/category/ServicesOverview'
import Testimonial from '@/components/category/Testimonial'
import PlatformIndustrySection from '@/components/home/sections/PlatformIndustrySection'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <ServicesOverview />
        <AccomplishmentsSection />
        <IndustriesSection />
        <PlatformIndustrySection />
        <FAQSection />
    </div>
  )
}

export default page