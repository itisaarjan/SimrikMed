import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar bg-white">
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
              <li><a>Home</a></li>
              <li>
                <a>Services</a>
                <ul className="p-2 mt-1 bg-white shadow-lg rounded-box">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Patient Portal</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact Us</a></li>
              <details>
                <summary className="text-black">More</summary>
                <ul className="p-2 mt-1 bg-white shadow-lg rounded-box ">
                  <li><a>Frequently Asked Questions</a></li>
                  <li><a>Insurance and Coverage</a></li>
                </ul>
              </details>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-500">Simrik</a>
        </div>
        <div className="navbar-center hidden md:flex text-black">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
             <details>
                <summary>Services</summary>
                    <ul className="p-2 mt-1 bg-white shadow-lg rounded-box w-72"> 
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        <li><a>Submenu 3</a></li>
                        <li><a>Submenu 4</a></li>
                        <li><a>Submenu 5</a></li>
                        <li><a>Submenu 6</a></li>
                        <li><a>Submenu 7</a></li>
                    </ul>
            </details>

            </li>
            <li><a>Patient Portal</a></li>
            <li><a>Contact Us</a></li>
            <li><a>About Us</a></li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 mt-1 bg-white shadow-lg rounded-box">
                  <li><a>Frequently Asked Questions</a></li>
                  <li><a>Insurance and Coverage</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-500 hover:bg-red-500/75 border-none text-white">Make appointment</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
