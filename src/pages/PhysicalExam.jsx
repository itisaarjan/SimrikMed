import React from 'react'
import ServicePage from '../Components/ServicePage'
import img1 from '../assets/lab/xray1.jpg'
import img2 from '../assets/lab/xray2.jpg'
import img3 from '../assets/lab/xray3.webp'
import img4 from '../assets/lab/xray4.jpg'
import img5 from '../assets/lab/xray5.jpg'
import img6 from '../assets/lab/xray6.avif'


function PhysicalExam() {
  return (
    <ServicePage 
    title="Xray" 
    header={<h1></h1>}
    content={<>
  <h1 className='text-2xl'>We will place the order for diagnostic imaging, such as X-ray, MRI, CT scan, or ultrasound, at your nearest imaging facility.</h1>
    
    </>}
    img1={img1}
      img2={img2}
      img3={img3}
      img4={img4}
      img5={img5}
      img6={img6} />
  )
}

export default PhysicalExam