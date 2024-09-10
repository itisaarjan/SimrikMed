import React from 'react';

function ServiceIcon(props) {
  return (
    <div className='w-[20rem]'>
      <div className='flex justify-center'>
        <img 
          src={props.image} 
          className='rounded-full w-[10rem] h-[10rem] object-cover' 
          alt='Service Icon'
        />
      </div>
      <div className='text-center mt-2'>
        <h5 className='text-black'>{props.title?.toUpperCase()}</h5>
      </div>
    </div>
  )
}

export default ServiceIcon;
