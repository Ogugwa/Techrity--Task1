import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] text-white text-left'>
      <div className='max-w-[1240px] mx-auto py-10 px-4 flex flex-col md:flex-row items-start md:justify-center gap-10'>

        {/* Logo & Description */}
        <div className='md:max-w-sm'>
          <div className='flex items-center space-x-2 mb-4'>
            <div className="w-10 h-10 flex items-center justify-center bg-white text-[#5B9BF3] font-bold rounded-full">
              T
            </div>
            <h4 className='text-2xl font-semibold'>Trafalgar</h4>
          </div>
          <p className='text-sm leading-relaxed mb-4'>
            Trafalgar provides progressive and affordable<br />
            healthcare, accessible on mobile and online<br />
            for everyone.
          </p>
          <p className='text-xs'>© Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>

        {/* Footer Links */}
        <div className='flex flex-wrap gap-10'>
          {/* Company */}
          <div>
            <h4 className='text-lg font-semibold mb-3'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a doctor</li>
              <li>Apps</li>
            </ul>
          </div>

          {/* Region */}
          <div>
            <h4 className='text-lg font-semibold mb-3'>Region</h4>
            <ul className='space-y-2 text-sm'>
              <li>Indonesia</li>
              <li>Singapore</li>
              <li>Hong Kong</li>
              <li>Canada</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className='text-lg font-semibold mb-3'>Help</h4>
            <ul className='space-y-2 text-sm'>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>

      </div>
      </footer>
    );
  };
  
  export default Footer;