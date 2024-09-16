import React from 'react';
import ServicePage from '../Components/ServicePage';
import img1 from '../assets/InHouseVaccination/ivc1.png';
import img2 from '../assets/InHouseVaccination/ivc2.png';
import img3 from '../assets/InHouseVaccination/ivc3.jpg';
import img4 from '../assets/InHouseVaccination/ivc4.jpg';
import img5 from '../assets/InHouseVaccination/ivc5.jpg';
import img6 from '../assets/InHouseVaccination/ivc6.jpeg';


function InHouseVaccination() {
  return (
    <ServicePage 
      title='In-House Vaccination Services' 
      header={<h3><b>Get Vaccinated in the Comfort of Your Home or Office</b></h3>} 
      content={
        <>
          Our in-house vaccination service brings convenience and safety directly to your doorstep. Whether for flu, COVID-19, or other essential vaccines, our certified medical professionals ensure a seamless and hygienic vaccination process at your home or office. 
          This service is ideal for individuals, families, and organizations seeking to avoid clinic visits while staying up-to-date with vaccinations. Prioritize your health and immunity without the hassle of waiting rooms or travel.
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

export default InHouseVaccination;
