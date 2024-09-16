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
    title="rapid lab tests and screening"
    header={<><h1 className='text-3xl'>Rapid Lab tests and Screening</h1></>}

    content={<ul className='list-disc'>
  <li>Allergies - Food & Environmental</li>
  <li>COVID-19 Testing</li>
  <li>STD & HIV Testing</li>
  <li>Blood draws Rapid HIV (results in 15 min.)</li>
  <li>Rapid Influenza A&B Testing (results in 15 min.)</li>
  <li>Rapid mononucleosis screening (15 min.)</li>
  <li>Rapid strep (results in 15 min.)</li>
  <li>Urine pregnancy test</li>
  <li>Urinalysis</li>
  <li>Drug Screening</li>
  <li>& much more...</li>
</ul>
}/>
  )
}

export default RapidTests