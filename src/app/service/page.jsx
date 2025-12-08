import Hero from '@/components/service/Hero'
import StatsSection from '@/components/service/StatsSection'
import React from 'react'
import WhatIsDigitalMarketing from '../../components/service/WhatIsDigitalMarketing'
import CoreService from '../../components/service/CoreService'
import WhyChooseUs from '../../components/service/WhyChooseUs'
import Testimonials from '../../components/service/Testimonials'
import CTASection from '../../components/service/CTASection'
import FAQSection from '@/components/home/sections/FAQSection'

const page = () => {
  return (
    <div>
        <Hero />
        <StatsSection />
        <WhatIsDigitalMarketing />
        <CoreService />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
        <FAQSection />
        
    </div>
  )
}

export default page