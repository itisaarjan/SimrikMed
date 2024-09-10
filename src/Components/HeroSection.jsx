import React from 'react'

function HeroSection() {
  return (
    <div className='bg-white pl-12 pr-12'>
        <div className="hero bg-white ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className='w-[60vw]'>
      <h1 className="text-5xl font-bold text-black z-0">Simrik Clinic </h1>
      <p className="text-black w-[60%] mt-4">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white">Make Appointment</button>
      <button className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white ml-4">Make a call</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroSection