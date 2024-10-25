import React from 'react';
import aboutImage from '../assets/photo.png'; 
import { FaStethoscope, FaUserMd, FaRegHeart } from 'react-icons/fa'; // Medical icons

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Main Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl w-full transform transition duration-500 hover:scale-105">
        {/* Doctor Image */}
        <div className="w-full md:w-[40%]">
          <img
            src={aboutImage}
            alt="Doctor"
            className="w-full h-auto object-contain object-center"
          />
        </div>
        {/* Text Section */}
        <div className="p-8 flex flex-col justify-center md:w-[60%] bg-gradient-to-b from-blue-50 to-blue-100 py-10">
          <h1 className="text-4xl font-bold text-black mb-4 flex items-center">
             Krish Adhikari FNP-BC
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Certified by the Academy of Nurse Practitioners Certification Board (AANP) and the American Nurses Credentialing Center (ANCC), Krish is dedicated to enhancing the quality of life for his patients through personalized, whole-body care.
          </p>
          <div className="text-gray-600 mb-6">
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaStethoscope className="text-blue-600 mr-2" /> Specializes in family medicine, offering comprehensive care.
              </li>
              <li className="flex items-center">
                <FaRegHeart className="text-red-500 mr-2" /> Licensed in Florida, Ohio, and Pennsylvania.
              </li>
              <li className="flex items-center">
                <FaUserMd className="text-green-600 mr-2" /> Fluent in English, Hindi, and Nepali.
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-lg">
            Krish values effective communication with patients from diverse backgrounds, promoting holistic well-being and patient education to empower individuals in achieving their health goals. His commitment to promoting overall health and wellness makes him a dedicated provider focused on patient empowerment and care.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
