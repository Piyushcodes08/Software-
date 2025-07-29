import React from 'react';
import '../../src/index.css';
import img1 from '../assets/bg-img/home-bg-right.png'
import img2 from '../assets/bg-img/home-bg-right2.png'
const Home = () => {
  return (
    <div className="relative h-screen w-full grid grid-cols-2 text-[#f4f2f2] bg-gradient-to-r from-[#1e3a8a] to-[#10b981]">
      <div className="absolute inset-0 bg-img " />
      <div className="col-span-1 flex justify-center h-full items-center z-10">
        <div className='flex flex-col justify-center items-start gap-4 pe-20 ps-30 pt-30'>
          <div className='text-6xl font-semibold'>
            Custom Software
          </div>
          <div className='text-[42px] font-semibold'>
            Development Company
          </div>
          <p>
            For 14+ years,  has worked with 1,200+ clients
            worldwide, from funded startups to global
            enterprises and established brands
          </p>
          <button className='uppercase bg-[#10B981] text-white py-2 px-6 rounded-[9px] font-semibold hover:bg-[#0e9f6e] transition-all cursor-pointer mt-5'>
            book a call
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center h-full items-center  relative">
          <img
          src={img1}
          alt="right-img"
          className="absolute top-[80px] left-[60px] w-[450px] "
        />
        <img
          src={img2}
          alt="right-img2"
          className="absolute bottom-[-8px] left-[60px] h-[500px]"
        />
      </div>
    </div>
  );
};

export default Home;
