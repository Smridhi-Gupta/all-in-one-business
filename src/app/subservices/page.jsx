import BeyondH1B from '@/components/subservices/sections/BeyondH1B'
import ComplianceExcellence from '@/components/subservices/sections/ComplianceExcellence'
import H1BServices from '@/components/subservices/sections/H1BServices'
import Hero from '@/components/subservices/sections/Hero'
import IndustryExpertise from '@/components/subservices/sections/IndustryExpertise'
import OurProcess from '@/components/subservices/sections/OurProcess'
import TakeControlVisa from '@/components/subservices/sections/TakeControlVisa'
import WhyEmbtel from '@/components/subservices/sections/WhyEmbtel'
import WhyEmbtel2 from '@/components/subservices/sections/WhyEmbtel2'
import WhyThisMatters from '@/components/subservices/sections/WhyThisMatters'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <WhyThisMatters />
      <H1BServices />
      <OurProcess />
      <WhyEmbtel />
      <IndustryExpertise />
      <ComplianceExcellence />
      <BeyondH1B />
      <WhyEmbtel2 />
      <TakeControlVisa />
    </div>
  )
}

export default page