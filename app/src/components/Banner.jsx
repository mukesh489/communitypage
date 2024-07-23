import React from 'react';
import banner from '../asset/banner.jpg'; // Make sure the path is correct

const Banner = () => {
  return (
    <>
      <div className='flex flex-col items-center m-2'>
        <h1 className='text-2xl text-white'> Member Community</h1>
       
      </div>
      <div className='p-4'>
        <img src={banner} alt="Banner" />
      </div>
      <div className='flex flex-col items-center m-2' >
        <p  className='text-xl text-white m-4' > Multiply your earning by participating more in the community!</p>
       
      </div>
    </>
  );
}

export default Banner;
