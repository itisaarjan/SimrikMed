import React from 'react'

function HeroSection() {
  return (
    <div className='bg-white pl-12 pr-12 z-10 h-[30vh]'>
        <div className="hero bg-white ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className='w-[60vw]'>
      <h1 className="text-5xl font-bold text-black z-0">SimrikMed </h1>
      <p className="text-black w-[60%] mt-4">
        {/* Urgent Care and Medical Weight Loss Clinic. */}
        <h1 className='text-2xl'> Coming soon...</h1>
      </p>
      <a className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white" href='https://www.optimantra.com/optimus/om/patient/login' target='_blank'>Make Appointment</a>
      {/* <a className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white ml-4" href='tel:+18139927839'>Make a call</a> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroSection