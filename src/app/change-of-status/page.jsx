import FAQSection from '@/components/home/sections/FAQSection'
import Disclaimer from '@/components/change-of-status/sections/Disclaimer'
import Hero from '@/components/change-of-status/sections/Hero'
import TakeControl from '@/components/change-of-status/sections/TakeControl'
import WhoWeHelp from '@/components/change-of-status/sections/WhoWeHelp'
import WhyChooseEmbtel from '@/components/change-of-status/sections/WhyChooseEmbtel'
import WhyChooseEmbtel2 from '@/components/change-of-status/sections/WhyChooseEmbtel2'
import WhyThisMatters from '@/components/change-of-status/sections/WhyThisMatters'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <WhyThisMatters />
        <WhoWeHelp />
        <WhyChooseEmbtel />
        <WhyChooseEmbtel2 />
        <FAQSection />
        <TakeControl />
        <Disclaimer />
    </div>
  )
}

export default page