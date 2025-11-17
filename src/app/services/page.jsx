import FAQSection from '@/components/home/sections/FAQSection'
import Disclaimer from '@/components/services/sections/Disclaimer'
import Hero from '@/components/services/sections/Hero'
import TakeControl from '@/components/services/sections/TakeControl'
import WhoWeHelp from '@/components/services/sections/WhoWeHelp'
import WhyChooseEmbtel from '@/components/services/sections/WhyChooseEmbtel'
import WhyChooseEmbtel2 from '@/components/services/sections/WhyChooseEmbtel2'
import WhyThisMatters from '@/components/services/sections/WhyThisMatters'
import React from 'react'

const page = () => {
  return (
    <div className='mt-15'>
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