import React from 'react';

function ServicePage(props) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='title'></div> 
        <div className='text-black mt-8'>{props.title.toUpperCase()}</div>
        <div className='flex flex-col items-center justify-center'>
            <hr className="w-full my-4 border-gray-400" />

        <div className='flex items-center mt-8 justify-between mb-8'>
            <div>
                <img alt="image1" />
            </div>
            <div>
                <img alt="image2" />
            </div>
            <div>
                <img alt="image3" />
            </div>
        </div>
        <h2 className='text-black w-full'>
          Our team will support you in building a healthier you.<br /> 
          No matter what your health needs are...
        </h2>
        <div className='text-black mt-4 flex flex-col items-center justify-center'>
            {props.content}
        </div>
        <button className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white ml-4">
          Make a call
        </button>
        <div className='flex items-center mt-8 justify-between'>
            <div>
                <img alt="image4" />
            </div>
            <div>
                <img alt="image5" />
            </div>
            <div>
                <img alt="image6" />
            </div>
        </div>
        </div>
    </div>
  );
}

export default ServicePage;
