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
          In our med,patients are given oppurtunity to consult with healthcare professionals remotely using technology such as video conferencing, phone calls, or messaging apps. 
          This approach ensures that patients can receive timely medical advice, prescriptions, and follow-up care without the need to physically visit a clinic. 
          Virtual care is especially beneficial for managing chronic conditions, follow-up visits, or for consultations when immediate access to in-person care is not available. 
          With virtual care, healthcare becomes more accessible, flexible, and convenient.
        </>
      }
      img1={img1}
      img2={img2}
      img3={img3}
      img4={img4}
      img5={img5}
      img6={img6}
    />
  );
}

export default VirtualCare;
