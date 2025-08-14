import React from 'react';
import html from '../assets/blogpng/HTML.png';
import CSS from '../assets/blogpng/CSS.png';
import java from '../assets/blogpng/Java.png';
import JS from '../assets/blogpng/JS.png';
import Laravel from '../assets/blogpng/Laravel.png';
import PHP from '../assets/blogpng/PHP.png';
import Phythan from '../assets/blogpng/Phythan.png';
import mongodb from '../assets/blogpng/mongodb.png';
import ai from '../assets/blogpng/ai.png';
import Coral from '../assets/blogpng/Coral DRaw.png';
import figma from '../assets/blogpng/figma.png';
import Photo from '../assets/blogpng/Photo Shop.png';

const Blog = () => {
  return (
    <div className="bg-[#e6f7f7] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#074177] mt-6">
          Software Development
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#074177] mb-6">
          Technology Stack
        </h1>

        {/* Description */}
        <p className="text-[#074177] text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 px-2">
          The partner of choice for many of the world’s leading enterprises, SMEs and technology challengers.
          We help businesses elevate their value.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend */}
          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Frontend <br /> Development
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <img src={html} alt="HTML" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={CSS} alt="CSS" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={java} alt="JavaScript" className="w-10 sm:w-12 h-10 sm:h-12" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Backend <br /> Development
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <img src={JS} alt="NodeJS" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={Phythan} alt="Python" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={PHP} alt="PHP" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={Laravel} alt="Laravel" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={mongodb} alt="MongoDB" className="w-10 sm:w-12 h-10 sm:h-12" />
            </div>
          </div>

          {/* Graphic Design */}
          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Graphic <br /> Design
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <img src={ai} alt="Illustrator" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={Photo} alt="Photoshop" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={Coral} alt="CorelDRAW" className="w-10 sm:w-12 h-10 sm:h-12" />
              <img src={figma} alt="Figma" className="w-10 sm:w-12 h-10 sm:h-12" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
