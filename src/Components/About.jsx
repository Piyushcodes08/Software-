import React from 'react';
import svg1 from '../assets/About-svg/svg1.svg';
import svg2 from '../assets/About-svg/svg2.svg';
import svg3 from '../assets/About-svg/svg3.svg';
import svg4 from '../assets/About-svg/svg4.svg';
import svg5 from '../assets/About-svg/svg5.svg';
import svg6 from '../assets/About-svg/svg6.svg';

const services = [
  {
    title: 'Architecture & Design Consulting',
    desc: "Looking for a software solution that's scalable, reliable, and easy to maintain? We are here to help you.",
    icon: svg1,
  },
  {
    title: 'DevOps and Automation Consulting',
    desc: 'Streamline your software development lifecycle with our DevOps & automation consulting services.',
    icon: svg6,
  },
  {
    title: 'Software Modernization',
    desc: 'Stay ahead of the competition by modernizing your legacy systems. Versioned & easy to integrate.',
    icon: svg5,
  },
  {
    title: 'Software Licensing/Compliance Consulting',
    desc: 'Worried about software licenses and rules? We can help. Our team checks your software.',
    icon: svg3,
  },
  {
    title: 'Business Consulting',
    desc: "Our business consulting services go beyond technology to address your company's broader strategy.",
    icon: svg4,
  },
  {
    title: 'Software Product Consulting',
    desc: 'Whether you’re launching a new SaaS product or improving an existing cloud-based solution.',
    icon: svg2,
  },
];

const About = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-[#e8f9f8]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#074177]">
          Software Development
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#074177] mt-3">
          Services & Offerings
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg py-10 px-6 bg-gradient-to-br from-[#1e3a8a]/95 to-[#10b981]/95 text-white flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 md:w-20 md:h-20 mb-5"
            />
            <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm md:text-base opacity-90 mb-6">{service.desc}</p>
            <button className="uppercase font-semibold text-sm border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#1e3a8a] transition-all duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
