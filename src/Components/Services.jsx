import React from 'react';
import '../../src/index.css';
import svg1 from '../assets/Services-svg/svg1.svg'
import svg2 from '../assets/Services-svg/svg2.svg'
import svg3 from '../assets/Services-svg/svg3.svg'
import svg4 from '../assets/Services-svg/svg4.svg'
import svg5 from '../assets/Services-svg/svg5.svg'
import svg6 from '../assets/Services-svg/svg6.svg'
import svg7 from '../assets/Services-svg/svg7.svg'
import svg8 from '../assets/Services-svg/svg8.svg'
import svg9 from '../assets/Services-svg/svg9.svg'
import svg10 from '../assets/Services-svg/svg10.svg'
import svg11 from '../assets/Services-svg/svg11.svg'
import svg12 from '../assets/Services-svg/svg12.svg'

const Industries = [
  { icon: svg1, name: 'Healthcare' },
  { icon: svg2, name: 'Real Estate' },
  { icon: svg3, name: 'Investment' },
  { icon: svg4, name: 'Insurance' },
  { icon: svg5, name: 'Retail' },
  { icon: svg6, name: 'Oil & Gas' },
  { icon: svg7, name: 'Telecommunication' },
  { icon: svg8, name: 'Professional Services' },
  { icon: svg9, name: 'Transportation & Logistics' },
  { icon: svg10, name: 'Education & Elearning' },
  { icon: svg11, name: 'Manufacturing' },
  { icon: svg12, name: 'Banking & Finance' },
];

const Services = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-r from-[#1e3a8a] to-[#10b981] text-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl font-medium  mb-8">Industries We Serve</h1>
        <p className="text-lg md:text-2xl text-white mb-14 max-w-2xl">
          Custom software solutions built for your industry — healthcare, retail, finance, real estate, and more.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {Industries.map((item, index) => (
            <div
              key={index}
              className="rounded-xl px-3 py-9 cursor-pointer transition-all duration-300 
                         bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.name} className="w-10 h-10" />
              </div>
              <p className="text-center font-medium text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
