import Hero from '@/components/about/sections/Hero'
import MissionVision from '@/components/about/sections/MissionVision'
import OurValues from '@/components/about/sections/OurValues'
import Stats from '@/components/about/sections/Stats'
import FAQSection from '@/components/home/sections/FAQSection'
import PlatformIndustrySection from '@/components/home/sections/PlatformIndustrySection'
import CTASection from '@/components/service/CTASection'
import WhyChooseUs from '@/components/service/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero />
       <MissionVision />
       <Stats />
       <WhyChooseUs />
       <OurValues />
       <CTASection />
       <PlatformIndustrySection />
       <FAQSection />
    </div>
  )
}

export default page