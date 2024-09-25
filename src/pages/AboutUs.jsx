import React from 'react';
import aboutImage from '../assets/photo.png'; 

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Main Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full md:justify-between">
        {/* Doctor Image */}
        <div className="w- md:w-1/2">
          <img
            src={aboutImage}
            alt="Doctor"
            className="w-full h-full  sm:w-[40rem] sm: object-cover object-center" // Ensure the image covers the available area without being cropped
          />
        </div>
        {/* Text Section */}
        <div className="p-6 flex flex-col justify-center md:w-[200%]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Krish Adhikari FNP-BC</h1>
          <p className="text-gray-600 text-lg mb-4">
            Krish Adhikari is dedicated to enhancing your quality of life through personalized care tailored to your unique health needs. With his experience in delivering exceptional patient care, Krish is a trusted provider certified by the Academy of Nurse Practitioners Certification Board and the American Nurses Credentialing Center. Specializing in family medicine, he offers comprehensive care to patients of all ages, emphasizing whole-body health and wellness. His passion for healthcare extends beyond treating symptoms to promoting holistic well-being, aiming to empower you to achieve your optimal health goals. With Krish, you can expect compassionate, expert care aimed at improving your overall quality of life. Fluent in English, Hindi, and Nepali, he ensures effective communication and understanding with patients of diverse backgrounds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
