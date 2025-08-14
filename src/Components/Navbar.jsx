import React from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Services", link: "services" },
    { name: "Blog", link: "blog" },
    { name: "Contact Us", link: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white text-black shadow z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-16 h-20">
        {/* Logo */}
        <div className="font-bold md:text-3xl text-xl text-[#1e3a8a]">
          LOGO
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold cursor-pointer">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-[#10B981] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block uppercase bg-[#10B981] text-white py-2 px-6 rounded-[9px] font-semibold hover:bg-[#0e9f6e] transition-all">
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer text-2xl"
        >
          <FiMenu />
        </label>
      </div>

      {/* Hidden checkbox to control sidebar */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 md:hidden"></div>

      {/* Sidebar for mobile */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 md:hidden z-50 flex flex-col items-center">
        {/* Close icon */}
        <label
          htmlFor="menu-toggle"
          className="absolute top-6 right-6 cursor-pointer text-2xl"
        >
          <FiX />
        </label>

        {/* Menu items */}
        <ul className="flex flex-col gap-6 text-lg font-semibold text-center mt-20">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                offset={-80}
                className="block hover:text-[#10B981] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <button className="mt-8 w-40 uppercase bg-[#10B981] text-white py-2 rounded-[9px] font-semibold hover:bg-[#0e9f6e] transition-all">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
