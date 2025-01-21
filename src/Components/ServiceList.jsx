import React from 'react';
import ServiceIcon from './ServiceIcon';
import weightLoss from "../assets/weightloss.jpeg";
import virtualCare from '../assets/virtualcare.png';
import xray from '../assets/xray.jpg'
import labimg from '../assets/labimg.jpg'
import { Link } from 'react-router-dom';

function ServiceList() {
  return (<div className='mt-8 px-4 sm:px-8 lg:px-12 mb-16 flex flex-col mb-4'>
  <h1 className='text-3xl sm:text-4xl lg:text-5xl text-black text-center'>Services</h1>
  <hr className='my-4'/>
  <div className='flex flex-wrap justify-center items-center gap-10'>
    <Link to='/services/virtual-care' className='max-w-sm'>
      <ServiceIcon image={virtualCare} title="Virtual Care" />
    </Link>
    <Link to='/services/medical-weight-loss' className='max-w-sm'>
      <ServiceIcon image={weightLoss} title="Medical Weight Loss" />
    </Link>
    <Link to='/services/xray' className='max-w-sm'>
      <ServiceIcon image={xray} title='Xray'/>
    </Link>
    <Link to='/services/labtests' className='max-w-sm'>
      <ServiceIcon image={labimg} title='lab'/>
    </Link>
  </div>

  {/* Adding vertical space before the 'We deliver' section */}
  <div className="w-full  text-black  mt-16 mb-8">
    <div className="text-center italic text-md">
    </div>
  </div>
</div>

  );
}

export default ServiceList;
