import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServiceList from '../Components/ServiceList'

function Home() {
  return (
    
    <div className='flex flex-column '>
      <HeroSection/>
      <ServiceList/>
    </div>
    
  )
}

export default Home