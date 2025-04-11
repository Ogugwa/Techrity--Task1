import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='navbar flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      {/* Desktop Logo */}
      <div className='flex items-center space-x-2'>
        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
          T
        </div>
        <h1 className='hidden md:block  text-2xl font-bold text-[#233348] leading-none'>Trafalgar</h1>       
      </div>
      {/* Desktop Nav */}
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Find a doctor</li>
        <li className='p-4'>Apps</li>
        <li className='p-4'>Testimonials</li>
        <li className='p-4'>About us</li>
      </ul>      
      {/* Mobile Nav */}
      <div className='md:hidden'> 
         <h1 className=' text-2xl font-bold text-[#233348] m-1 -ml-2'>Trafalgar</h1> 
      </div>  
      {/* Hamburger Icon */}
      <div onClick={handleNav} className='block md:hidden z-20'>
          {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24} />}
        </div>    
      <ul className={`${nav ? 'fixed z-10 left-0 top-24 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-24 ease-in-out duration-500'}`}>
        <li className='p-4  border-b'>Home</li>
        <li className='p-4  border-b'>Find a doctor</li>
        <li className='p-4  border-b'>Apps</li>
        <li className='p-4  border-b'>Testimonials</li>
        <li className='p-4  border-b'>About us</li>
      </ul>
    </div>
  );
};

export default Navbar;
