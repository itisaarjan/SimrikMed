import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar bg-white text-center z-20 relative">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg text-black">
              <li><a href='/'>Home</a></li>
              <li>
                <details>
                <summary>Services</summary>
                <ul className="p-2 mt-1 bg-white shadow-lg rounded-box">
                        {/* <li><a>Primary care Services</a></li> */}
                        {/* <li><a>Medical Clearence</a></li> */}
                        {/* <li><a>Physical Exams</a></li> */}
                        {/* <li><a>IV FLUIDS</a></li> */}
                        {/* <li><a>Lab tests and Screening</a></li> */}
                        {/* <li><a>Wellness Services</a></li> */}
                        {/* <li><a>Chronic Medical Conditions</a></li> */}
                        {/* <li><a href='/services/in-house-vaccination'>In-House vaccination</a></li> */}
                        <li><a href='/services/virtual-care'>Virtual Urgent Care</a></li>
                        <li><a href='/services/medical-weight-loss'>Medical Weight Loss</a></li>
                </ul>
              </details>
              </li>
              <li><a href='https://www.optimantra.com/optimus/om/patient/login?accessPoint=UzBCcVd2WTZiRnNsUkpCOWQ4ZU1udz09' target='_blank'>Patient Portal</a></li>
              <li><a href='/about'>About Us</a></li>
              <li><a href='/contact'>Contact Us</a></li>
              {/* <details>
                <summary className="text-black">More</summary>
                <ul className="p-2 mt-1 bg-white shadow-lg rounded-box ">
                  <li><a>Frequently Asked Questions</a></li>
                  <li><a>Insurance and Coverage</a></li>
                </ul>
              </details> */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-500" href='/'>SimrikMed</a>
        </div>
        <div className="navbar-center hidden md:flex text-black">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li>
             <details>
                <summary>Services</summary>
                    <ul className="p-2 mt-1 bg-white shadow-lg rounded-box w-72 z-100"> 
                        {/* <li><a>Primary care Services</a></li> */}
                        {/* <li><a>Medical Clearence</a></li> */}
                        {/* <li><a>Physical Exams</a></li> */}
                        {/* <li><a>IV FLUIDS</a></li> */}
                        {/* <li><a>Lab tests and Screening</a></li> */}
                        {/* <li><a>Wellness Services</a></li> */}
                        {/* <li><a>Chronic Medical Conditions</a></li> */}
                        {/* <li><a href='/services/in-house-vaccination'>In-House vaccination</a></li> */}
                        <li><a href='/services/virtual-care'>Virtual Urgent Care</a></li>
                        <li><a href='/services/medical-weight-loss'>Medical Weight Loss</a></li>
                    </ul>
            </details>

            </li>
            <li><a href='https://www.optimantra.com/optimus/om/patient/login?accessPoint=UzBCcVd2WTZiRnNsUkpCOWQ4ZU1udz09' target='_blank'>Patient Portal</a></li>
            <li><a href='/contact'>Contact Us</a></li>
            <li><a href='/about'>About Us</a></li>
            <li>
              {/* <details>
                <summary>More</summary>
                <ul className="p-2 mt-1 bg-white shadow-lg rounded-box">
                  <li><a>Frequently Asked Questions</a></li>
                  <li><a>Insurance and Coverage</a></li>
                </ul>
              </details> */}
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-[1rem] mt-4">
          <a className=" hidden sm:btn sm:bg-red-500 sm:hover:bg-red-500/75 sm:border-none sm:text-white" href='https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=QjdaSHA4dlg5eWZtbU0yTFFMR0NPUT09&lid=cGFrZGxyMVkvc2wvdnByYkdWcjRBdz09' target='_blank'>Make appointment</a>
          <a 
            className="hidden sm:btn sm:bg-red-500 sm:hover:bg-red-500/75 sm:border-none sm:text-white p-2 rounded" 
            href="tel:+18134999090"
          >
            Call Us
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
