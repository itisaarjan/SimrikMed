import React from 'react'
import ServicePage from '../Components/ServicePage'
import img1 from '../assets/RapidLabTest/rl1.jpg';
import img2 from '../assets/RapidLabTest/rl2.jpg';
import img3 from '../assets/RapidLabTest/rl3.avif';
import img4 from '../assets/RapidLabTest/rl4.jpg';
import img5 from '../assets/RapidLabTest/rl5.jpg';
import img6 from '../assets/RapidLabTest/rl6.jpg';

function RapidTests() {
  return (
    <ServicePage 
    img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
    title="Lab tests and screening"
    header={<><h1 className='text-1xl'>We will securely arrange and pre-pay your lab order, ensuring it’s readily available at the nearest Labcorp or Quest Diagnostics facility for your convenience.</h1></>}

    content={<ul className='list-disc'>
  <li>Allergies - Food & Environmental</li>
<li>Autimmune Disease Testing</li>
<li>Blood Titers</li>
<li>Cholestrol Testing</li>
<li>Coagulation Testing</li>
<li>Diabetic Testing (HbA1c)</li>
<li>Drug Screening</li>
<li>Hormonal Test</li>
<li>Iron Studies</li>
<li>Kidney Function Test</li>
<li>Liver Function Testing</li>
<li>Pregnancy test</li>
<li>Prostate-Specific Antigen</li>
<li>STD & STI Testing (Only $199)</li>
<li>TB Testing</li>
<li>Thyroid Test</li>
<li>Urinalysis</li>
<li>Vitamin Minerals Panel</li>
<li>Weight Loss Blood Work</li>
<li>Whole Body Checkup (Only $199)</li>
</ul>

}/>
  )
}

export default RapidTests