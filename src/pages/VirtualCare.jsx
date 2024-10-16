import React from 'react';
import ServicePage from '../Components/ServicePage';
import img1 from '../assets/VirtualCare/vc1.jpg';
import img2 from '../assets/VirtualCare/vc2.jpeg';
import img3 from '../assets/VirtualCare/vc2.webp';
import img4 from '../assets/VirtualCare/vc4.jpg';
import img5 from '../assets/VirtualCare/vc5.webp';
import img6 from '../assets/VirtualCare/vc6.jpeg';

function VirtualCare() {
  return (
    <ServicePage 
      title='Virtual Care' 
      header={<h1><b>Experience healthcare from the comfort of your home</b></h1>} 
      content={
        <>
          In our Virtual Urgent Care, patients are given the opportunity to consult with healthcare professionals remotely using technology such as video conferencing or phone calls. 
          This approach ensures that patients can receive timely medical services such as:
          <ul className="list-disc ml-5">
            <li>Abdomen Pain</li>
            <li>Allergies</li>
            <li>Anxiety/Depression</li>
            <li>Asthma</li>
            <li>Back Pain/Sciatica</li>
            <li>Bacterial vaginosis</li>
            <li>Birth Control Pills</li>
            <li>Bronchitis</li>
            <li>Cough</li>
            <li>Dental Infection</li>
            <li>Diabetes</li>
            <li>Erectile Dysfunction</li>
            <li>Fall injury</li>
            <li>Hair Loss</li>
            <li>Headache</li>
            <li>Hemorrhoids</li>
            <li>High Blood Pressure</li>
            <li>Insomnia</li>
            <li>Migraine</li>
            <li>Medication refill</li>
            <li>Nausea/Vomiting/Diarrhea</li>
            <li>Pink Eye</li>
            <li>Quit Smoking</li>
            <li>Rashes</li>
            <li>Sinus Problem</li>
            <li>Skin Infection</li>
            <li>Sore Throat</li>
            <li>STDs/STI screening and treatment</li>
            <li>Upper respiratory symptoms</li>
            <li>Wound</li>
            <li>X-ray order</li>
            <li>Yeast infection</li>
          </ul>
        </>
      }
      img1={img1}
      img2={img2}
      img3={img3}
      img4={img4}
      img5={img5}
      img6={img6}
      price="59"
    />
  );
}

export default VirtualCare;
