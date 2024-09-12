import React from 'react'
import ServicePage from '../Components/ServicePage'
import img1 from '../assets/ChronicMedical/cm1.webp';
import img2 from '../assets/ChronicMedical/cm2.jpg';
import img3 from '../assets/ChronicMedical/cm3.jpg';
import img4 from '../assets/ChronicMedical/cm4.webp';
import img5 from '../assets/ChronicMedical/cm5.jpg';
import img6 from '../assets/ChronicMedical/cm6.jpg';


function ChronicMedical() {
  return (
   <ServicePage 
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
   title="chronic medical conditions"
   header={<><h1 className='text-3xl'>Chronic Medical Condition</h1></>}
   content={<>
        <ul className='list-disc'>
    <li>Allergies</li>
    <li>High Blood Pressure</li>
    <li>High Cholesterol</li>
    <li>Diabetes</li>
    <li>Heart Disease</li>
    <li>Asthma</li>
    <li>Bronchitis</li>
    <li>Kidney Disease</li>
    <li>Neurological Disorders</li>
    <li>Arthritis</li>
    <li>Skin & Nail Disorders</li>
</ul>

   </>}/>
  )
}

export default ChronicMedical