import CustomerStories from '@/components/home/sections/CustomerStories '
import Services from '@/components/home/sections/Services'
import FAQ from '@/components/sections/FAQ'
import ContactBanner from '@/components/services/sections/ContactBanner'
import Hero from '@/components/services/sections/Hero'
import IndustrySolution from '@/components/services/sections/IndustrySolution'
import ServicesHighlights from '@/components/services/sections/ServicesHighlights'
import React from 'react'

const page = () => {
  return (
    <div className='mt-15'>
        <Hero />
        <Services />
        <ServicesHighlights />
        <CustomerStories />
        <IndustrySolution />
        <ContactBanner />
        <FAQ />
    </div>
  )
}

export default page