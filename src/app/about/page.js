import Hero from '@/components/about/sections/Hero'
import MissionVision from '@/components/about/sections/MissionVision'
import FAQSection from '@/components/home/sections/FAQSection'
import CTASection from '@/components/service/CTASection'
import WhyChooseUs from '@/components/service/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero />
       <MissionVision />
       <WhyChooseUs />
       <CTASection />
       <FAQSection />
    </div>
  )
}

export default page