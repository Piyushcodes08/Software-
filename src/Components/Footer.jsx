import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">Piyush.codes08</h2>
          <p className="text-sm text-gray-300">
            We build reliable and scalable software solutions. Let’s work together to grow your business digitally.
          </p>
        </div>

  
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> piyushkoirax@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> +91 637-114-9273
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> Ahmedabad, Gujarat, India
            </li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://github.com/Piyushcodes08" className="hover:text-blue-400"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/piyush-gond-55a6a9340/" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/piyush.codes08/?hl=en" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
