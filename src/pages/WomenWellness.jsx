import React from 'react'
import ServicePage from '../Components/ServicePage'
import img1 from '../assets/WomanWellness/ww1.webp';
import img2 from '../assets/WomanWellness/ww2.jpeg';
import img3 from '../assets/WomanWellness/ww3.jpg';
import img4 from '../assets/WomanWellness/ww4.jpg';
import img5 from '../assets/WomanWellness/ww5.jpeg';
import img6 from '../assets/WomanWellness/ww6.jpg';

function WomenWellness() {
  return (
    <ServicePage 
    img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
    title="Women Wellness and family planning"
    header={<><h1 className='text-3xl'>Services and Practices</h1></>}
    content={<>
    <ul className='list-disc'>
        <li>Family Planning</li>
        <li>Safe Sex: Preventing unintended pregnancy also reduces the incidence of abortion and improves birth outcomes & STD's...</li>
        <li>MenoPause: The time that marks the end of your menstrual cycles. It's diagnosed after you've gone 12 months without a menstrual period. Menopause can happen in your 40s or 50s, but the average age is 51 in the United States. Menopause is a natural biological process...</li>
    </ul>
    <h1 className='text-3xl mt-4 '>Well Woman & Family Planning</h1>
    <p className='p-8 text-center'> Women's health is important to us. If you're starting a family or maintaining your overall health, we are available for all your women's health needs. </p>    
    </>
}
    />
  )
}

export default WomenWellness