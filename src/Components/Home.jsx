import React from 'react';
import '../../src/index.css';
import img1 from '../assets/bg-img/home-bg-right.png';
import img2 from '../assets/bg-img/home-bg-right2.png';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-2 text-[#f4f2f2] bg-gradient-to-r from-[#1e3a8a] to-[#10b981]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-img" />

      {/* Left Content */}
      <div className="flex justify-center items-center z-10 px-6 sm:px-10 md:px-16 py-16 md:py-0 text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-start gap-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            Custom Software
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight">
            Development Company
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            For 14+ years, we have worked with 1,200+ clients worldwide, from
            funded startups to global enterprises and established brands.
          </p>
          <button className="uppercase bg-[#10B981] text-white py-2 px-6 rounded-[9px] font-semibold hover:bg-[#0e9f6e] transition-all mt-5">
            Book a call
          </button>
        </div>
      </div>

      {/* Right Images (Hidden below md) */}
      <div className="relative justify-center items-center py-10 md:py-0 hidden md:flex">
        <img
          src={img1}
          alt="right-img"
          className="absolute top-10 left-6 sm:left-16 w-48 sm:w-72 md:w-[450px]"
        />
        <img
          src={img2}
          alt="right-img2"
          className="absolute bottom-0 left-6 sm:left-16 h-48 sm:h-72 md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default Home;
