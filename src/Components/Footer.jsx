import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer footer-center bg-gray-400 text-black rounded p-10 mt-[28rem] sm:mt-36 ">

  <aside>
    <b><p className='text-grey-500'>These Services are for Pennsylvania, Ohio, and Florida residents only</p></b>
  </aside>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover" href='/'>Home</a>
    <a className="link link-hover" href='https://www.optimantra.com/optimus/om/patient/login?accessPoint=UzBCcVd2WTZiRnNsUkpCOWQ4ZU1udz09' target='_blank'>Patient Portal</a>
    <a className="link link-hover" href='/contact'>Contact</a>
    <a className="link link-hover" href='/about'>About Us</a>
  </nav>
  
  <aside>
    <p>Phone: 813-499-9090</p>
    <p>Fax : 800-499-5068</p>
    <p>Gmail: simrikmed@gmail.com</p>
    <p>Copyright © <span className='text-[#EF4444]'>SimrikMed LLC</span> {new Date().getFullYear()} - All rights reserved</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer