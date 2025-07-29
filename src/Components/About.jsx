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
        <div className="py-16 px-2 md:px-6 bg-[#e8f9f8]">
            <h1 className="text-5xl font-semibold text-center text-[#074177] mt-12">
                Software Development
            </h1>
            <h2 className='text-5xl font-semibold text-center text-[#074177] mb-15 mt-4'>
                Services & Offerings
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-lg pt-15 pb-10 px-3 bg-gradient-to-br from-[#1e3a8a]/95  to-[#10b981]/95 text-white flex flex-col justify-between text-center items-center"
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                           className="w-16 h-16 md:w-24 md:h-24 mb-4"
                        />
                        <h3 className="text-2xl  mb-2">{service.title}</h3>
                        <p className=" mb-4">{service.desc}</p>
                        <button className=" font-semibold cursor-pointer pt-15">
                            READ MORE
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
