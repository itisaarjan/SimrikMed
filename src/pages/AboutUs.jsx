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
            Certified by the Academy of Nurse Practitioners Certification Board( AANP) and the American Nurses Credentialing Center(ANCC). Krish is dedicated to enhancing the quality of life for his patients through personalized, whole-body care. Specializing in family medicine, he offers comprehensive healthcare services to patients of all ages, emphasizing holistic well-being and patient education to empower individuals in achieving their health goals.  Licensed to practice in Florida, Ohio, and Pennsylvania, Krish values effective communication with patients from diverse backgrounds, being fluent in English, Hindi, and Nepali. His commitment to promoting overall health and wellness makes him a compassionate provider focused on patient empowerment and safety. He is excited to help patients at any time. He is fluent in English, Hindi, and Nepali. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
