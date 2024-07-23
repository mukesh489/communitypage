import React from 'react';
import banner from '../asset/banner.jpg'; // Make sure the path is correct

const Banner = () => {
  return (
    <>
      <div className='flex flex-col items-center m-4 lg:m-8 '>
        <h1 className='text-3xl lg:text-5xl text-white'>Member Community</h1>
      </div>
      <div className='p-4 lg:p-12 lg:m-12'>
        <img src={banner} alt="Banner" className='w-full h-auto lg:max-w-6xl mx-auto' />
      </div>
      <div className='flex flex-col items-center m-4 lg:m-8'>
        <p className='text-lg lg:text-2xl text-white'>
          Multiply your earning by participating more in the community!
        </p>
      </div>
    </>
  );
};

export default Banner;
