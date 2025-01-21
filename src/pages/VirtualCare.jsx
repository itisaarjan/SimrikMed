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
          In our SimrikMed Care, patients are given the opportunity to consult with healthcare professionals remotely using technology such as video conferencing. 
          This approach ensures that patients can receive timely medical services such as:
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:ml-20">
    {[
      "Abdomen Pain", "Allergies", "Anxiety/Depression", "Asthma/COPD", "Back Pain/Sciatica", 
      "Bacterial vaginosis", "Birth Control Pills", "Bronchitis", "Cough", "Dental Infection", 
      "Diabetes", "Drug Test", "Erectile Dysfunction", "Fall injury", "Hair Loss", 
      "Headache", "Hemorrhoids", "High Blood Pressure", "Insomnia", "Migraine", 
      "Medication refill", "Muscle Spasm", "Nausea/Vomiting/Diarrhea", "Pink Eye", 
      "Quit Smoking", "Rashes", "Sinus Problem", "Skin Infection", "Sore Throat", 
      "STDs/STI screening and treatment", "TB Screening", "Upper respiratory symptoms", 
      "UTI", "Wound", "X-ray order", "Yeast infection"
    ].map((item) => (
      <div 
        key={item}
        className="bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-center font-semibold text-center"
      >
        {item}
      </div>
    ))}
  </div>
</div>



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
