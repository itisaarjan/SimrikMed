import React from 'react';
import ServiceIcon from './ServiceIcon';
import weightLoss from "../assets/weightloss.jpeg";
import virtualCare from '../assets/virtualcare.png';
import { Link } from 'react-router-dom';

function ServiceList() {
  return (
    <div className='mt-8 px-4 sm:px-8 lg:px-12 mb-16'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-black text-center'>Services</h1>
      <hr className='my-4'/>
      <div className='grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        <Link to='/services/medical-weight-loss'>
          <ServiceIcon image={weightLoss} title="Medical Weight Loss"/>
        </Link>
        <Link to='/services/virtual-care'>
          <ServiceIcon image={virtualCare} title="Virtual Care"/>
        </Link>
      </div>
    </div>
  );
}

export default ServiceList;
