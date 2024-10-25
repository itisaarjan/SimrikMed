import React from 'react';

function ServicePage(props) {
  return (
    <div className='flex flex-col items-center justify-center w-[80%] mx-auto'> {/* Centered horizontally */}
        <div className='title'></div> 
        <div className='text-black mt-8'>{props.title.toUpperCase()}</div>
        <div className='flex flex-col items-center justify-center'>
            <hr className="w-full my-4 border-gray-400" />

            <div className='flex items-center mt-8 justify-between mb-8 '>
                <div className='w-[33%] h-[200px]'> 
                    <img src={props.img1} alt="image1" className='w-full h-full object-cover'/> {/* Maintain aspect ratio */}
                </div>
                <div className='w-[33%] h-[200px]'>
                    <img src={props.img2} alt="image2" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[33%] h-[200px]'>
                    <img src={props.img3} alt="image3" className='w-full h-full object-cover'/>
                </div>
            </div>

            <h2 className='text-black mx-auto '>
                {props.header}
            </h2>
            <div className='text-black mt-4 flex flex-col items-start justify-center'>
                {props.content}
            </div>
            {/* <a className="btn btn-primary bg-red-500 border-none hover:bg-red-500/80 mt-4 text-white ml-4" href='tel:+18139927839'>
                Make a call
            </a> */}

            <div>
                <h1 className='text-1xl mt-8 text-[black] ml-8 sm:ml-16'>Our services are HIPAA compliant</h1>
                <h1 className='text-1xl mt-8 text-[red] text-center'> <div className="flex justify-center items-center min-h-[200px] bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-xl p-8 m-4">
  <p className="text-4xl sm:text-5xl font-bold">
    <span className="block mb-2">Only</span>
    <b>${props.price} per visit</b>
  </p>
</div>
</h1>
                {/* <h1><b>Medical Services provided only in Florida, Ohio and Pennsylvania</b></h1> */}
            </div>
            <div className='flex items-center mt-8 justify-between'>
                <div className='w-[33%] h-[200px]'>
                    <img src={props.img4} alt="image4" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[33%] h-[200px]'>
                    <img src={props.img5} alt="image5" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[33%] h-[200px]'>
                    <img src={props.img6} alt="image6" className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ServicePage;
