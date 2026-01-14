import BeyondH1B from '@/components/h1B/sections/BeyondH1B'
import ComplianceExcellence from '@/components/h1B/sections/ComplianceExcellence'
import H1BServices from '@/components/h1B/sections/H1BServices'
import Hero from '@/components/h1B/sections/Hero'
import IndustryExpertise from '@/components/h1B/sections/IndustryExpertise'
import OurProcess from '@/components/h1B/sections/OurProcess'
import TakeControlVisa from '@/components/h1B/sections/TakeControlVisa'
import WhyEmbtel from '@/components/h1B/sections/WhyEmbtel'
import WhyEmbtel2 from '@/components/h1B/sections/WhyEmbtel2'
import WhyThisMatters from '@/components/h1B/sections/WhyThisMatters'
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