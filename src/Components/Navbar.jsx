import React from 'react'

const Navbar = () => {
  return (
<>
<div className='flex items-center justify-between px-30 h-20 w-full bg-white text-black z-30 fixed shadow'>
    <div className='font-bold text-3xl text-[#1e3a8a]'>
LOGO
    </div>
    <div>
        <ul className='hidden md:flex gap-8 font-semibold cursor-pointer'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
        </ul>
    </div>
    
<button className='uppercase bg-[#10B981] text-white py-2 px-6 rounded-[9px] font-semibold hover:bg-[#0e9f6e] transition-all cursor-pointer'>
    Contact Us
</button>
  
</div>
</>
  )
}

export default Navbar
