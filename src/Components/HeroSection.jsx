import React from 'react';

function HeroSection() {
  return (
    <div className='bg-white px-4 sm:px-8 md:px-12 z-10 mb-4'>
      <div className="hero bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse pt-16 lg:pt-32" >
          <div className='w-full lg:w-[60vw]'>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">SimrikMed</h1>
            <p className="text-black mt-4 text-lg sm:text-xl lg:text-2xl">
             
            </p>
            <a className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white" href='https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=cEdDUWtka2hqTmdVZEdKa252SDR2Zz09' target='_blank'>Make Appointment</a>
            <button 
            className=" sm:btn sm:bg-red-500 sm:hover:bg-red-500/75 sm:border-none sm:text-white p-2 rounded m-4"
            onClick={() => alert('+1-813-499-9090')}
          >Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
