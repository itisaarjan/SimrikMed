import React from 'react';
import ServicePage from '../Components/ServicePage';

function PrimaryCare() {
  return (
    <ServicePage 
        title='Primary care Services'
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
