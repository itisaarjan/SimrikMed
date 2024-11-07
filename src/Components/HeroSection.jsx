import React from 'react';
import logo from '../assets/logo.png';

function HeroSection() {
  return (
    <div className='bg-white px-4 z-10 mb-8 relative'>
      <div className="hero bg-white flex flex-col items-center pt-8 sm:pt-4">
        {/* Logo and "$59 per visit" in the same div */}
        <div className="flex flex-col sm:flex-row w-full items-center sm:items-start space-y-8 sm:space-y-0">
          {/* Logo with more top margin on mobile */}
          <img 
            src={logo} 
            alt="SimrikMed Logo" 
            className='w-24 sm:w-40 lg:w-60 h-auto -mt-4 sm:-mt-8' 
          />

          {/* "$59 per visit" with more margin on mobile */}
          <div className="flex-grow flex justify-center items-center sm:items-start sm:-ml-60 sm:mt-8 mt-8 w-[80%]">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-xl p-6 w-[100%] sm:w-[25%]">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:w-[100%]">
                <span className=" hidden sm:mb-0.5">Only</span>
                <b>Only $59 per visit</b>
              </p>
            </div>
          </div>
        </div>

        {/* Buttons in a single row with more space between them on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-32 sm:mt-8 space-y-8 sm:space-y-0 sm:space-x-8">
          <a 
            className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 text-white px-6 py-3"
            href='https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=QjdaSHA4dlg5eWZtbU0yTFFMR0NPUT09&lid=cGFrZGxyMVkvc2wvdnByYkdWcjRBdz09'
            target='_blank'
            rel='noopener noreferrer'
          >
            Make Appointment
          </a>
          <a 
            className="btn bg-red-500 hover:bg-red-500/75 border-none text-white px-6 py-3 rounded"
            href="tel:+18134999090"
          >
            CALL / TEXT (813)-499-9090
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
