import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex  flex-col md:flex-row w-full justify-between md:m-8'>
        <div className='text-left flex flex-col justify-start w-full md:w-[30rem] h-auto p-4 md:-ml-12 mt-8 mb:mb-0 '>
            <h1 className='text-4xl md:text-5xl font-semibold'>Virtual healthcare<br/>for you</h1>        
            <p className='mt-4 text-gray-600 text-xl'>Trafalgar provides progressive, and affordable <br/>
                healthcare, accessible on mobile and online <br/>
                for everyone
            </p>
            <button className='mt-6 bg-[#458FF6] text-white w-[12.5rem] h-[3.75rem] rounded-2xl hover:bg-sky-900 '>Consult today</button>
        </div>
        <div className='w-full md:w-[44rem] h-auto flex justify-center items-center'>
            <img src='./images/heroimg1.svg' alt='heroimg1' />
        </div>       
      </div>
    </div>
  )
}

export default Hero;
