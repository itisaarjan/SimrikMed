import React from 'react';
import ServiceIcon from './ServiceIcon';
import weightLoss from "../assets/weightloss.jpeg";
import virtualCare from '../assets/virtualcare.png';
import { Link } from 'react-router-dom';

function ServiceList() {
  return (
    <div className='mt-8 px-4 sm:px-8 lg:px-12 mb-16 flex flex-col mb-4'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-black text-center'>Services</h1>
      <hr className='my-4'/>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        <Link to='/services/virtual-care' className='max-w-sm'>
          <ServiceIcon image={virtualCare} title="Virtual Urgent Care" />
        </Link>
        <Link to='/services/medical-weight-loss' className='max-w-sm'>
          <ServiceIcon image={weightLoss} title="Medical Weight Loss" />
        </Link>
      </div>
      <div>
        <h1 className='text-md text-center text-[red] italic mt-8'>Deliver medications to your door or pick from nearest pharmacy</h1>
      </div>
    </div>
  );
}

export default ServiceList;
