import Hero from '@/components/about/sections/Hero'
import Impact from '@/components/about/sections/Impact'
import Innovations from '@/components/about/sections/Innovations'
import Resources from '@/components/about/sections/Resources'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero /> 
       <Innovations />
       <Impact />
       <Resources />
    </div>
  )
}

export default page