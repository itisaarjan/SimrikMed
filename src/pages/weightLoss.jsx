import React from 'react'
import ServicePage from '../Components/ServicePage'
import img1 from '../assets/weightLoss/wl4.png'
import img2 from '../assets/weightLoss/wl1.jpg';
import img3 from '../assets/weightLoss/wl2.jpeg';
import img4 from '../assets/weightLoss/wl3.avif';
import img5 from '../assets/weightLoss/wl5.webp';
import img6 from '../assets/weightLoss/wl6.avif';

function WeightLoss() {
  return (
    <ServicePage title='medical Weight Loss' 
    header={<h3><b>Our team will support in building a healthier you</b></h3>} 
    content={<>  Our Physician and Advance Certified Nurse Practicioner supervised weight loss programs are specially formulated to help patient lose weight. Strong emphasis on implementing lifestyle changes to reduce risk of metabolic syndrome.  Weight loss is essential to reduce risk factors with heart disease, diabetes mellitus type 2, insulin resistance, arthritis and sleep apnea. We work with you based on your needs. Several options available:  Prescription weight loss, Intermittent fasting, and Nutrition counselling</>}
    img1={img1}
    img2={img2}
    img3={img3}
    img4={img4}
    img5={img5}
    img6={img6}
    price="60"
    />
  )
}

export default WeightLoss