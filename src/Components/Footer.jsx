import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer footer-center bg-gray-400 text-black rounded p-10 mt-16 ">
    
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover" href='/'>Home</a>
    <a className="link link-hover" href='https://www.optimantra.com/optimus/om/patient/login' target='_blank'>Patient Portal</a>
    <a className="link link-hover" href='/contact/contact'>Contact</a>
    <a className="link link-hover" href='/about/about'>About Us</a>
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer