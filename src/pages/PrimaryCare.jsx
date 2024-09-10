import React from 'react';
import ServicePage from '../Components/ServicePage';
import img1 from '../assets/PrimaryCare/pc1.jpg';
import img2 from '../assets/PrimaryCare/pc2.jpg';
import img3 from '../assets/PrimaryCare/pc3.webp';
import img4 from '../assets/PrimaryCare/pc4.webp';
import img5 from '../assets/PrimaryCare/pc5.jpg';
import img6 from '../assets/PrimaryCare/pc6.avif';

function PrimaryCare() {
  return (
    <ServicePage 
        title='Primary care Services'
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
        header={<>
        Our team will support you in building a healthier you.<br /> 
                No matter what your health needs are...
        </>}
      content={
        <>
            <ul className='flex flex-col items-start justify-center m-auto list-disc'>
              <li>General Health Care</li>
              <li>Routine Physicals</li>
              <li>Laboratory Tests</li>
              <li>Immunizations & Vaccinations</li>
              <li>Diagnosis & Treatment of Minor Injuries</li>
              <li>Diagnosis & Treatment of Illnesses</li>
              <li>Referrals to Other Specialists (Cardiology, Pulmonary, Prenatal, etc.)</li>
              <li>Geriatric Care</li>
              <li>Pediatric Care</li>
              <li>Palliative Care</li>
              <li>Nutrition & Weight Loss</li>
              <li>Common Conditions & Illnesses</li>
              <li>Allergies</li>
              <li>Colds</li>
              <li>Covid-19</li>
              <li>Ear Infection</li>
              <li>FLU A&B</li>
              <li>Gastrointestinal Illnesses</li>
              <li>Hand, Foot and Mouth Diseases</li>
              <li>Lyme Disease</li>
              <li>Pink Eye</li>
              <li>Respiratory Illnesses</li>
              <li>Sinus Infections</li>
              <li>Skin Ailments</li>
              <li>Strep Throat</li>
              <li>Urinary Tract Infection</li>
              <li>TB Testing</li>
              <li>IV Fluids</li>
              <li>EKGs</li>
              <li>Sexually Transmitted Diseases (STDs)</li>
              <li>Well Women Care</li>
              <li>Ear Wax Removal</li>
              <li>Skin Tag Removal</li>
              <li>& more...</li>
          </ul>
        </>
      }
    />
  );
}

export default PrimaryCare;
