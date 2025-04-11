import React from 'react'

const Leading = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between md:m-8 mt-12'>
        <div className='w-full md:w-[40rem] h-auto flex justify-center items-center'>
            <img src='./images/loadingimg.png' alt='animated medical icon' />
        </div> 
        <div className='text-left flex flex-col justify-start w-full md:w-[30rem] h-auto p-4 md:-ml-12 mt-8 mb:mb-0 '>
            <h1 className='text-xl md:text-3xl font-semibold mb-4'>Leading healthcare<br/> providers</h1> 
            <hr className="w-[3.5rem] border-t-2 border-black-600 mb-2" />       
            <p className='mt-4 text-gray-600 text-xl'>Trafalgar provides progressive, and affordable <br/>
                healthcare, accessible on mobile and online <br/>
                for everyone. To us,it's not just work. We take pride in the <br/>
                solutions we deliver. 
            </p>
            <button className='mt-6 border border-blue-400 text-[#458FF6] hover:bg-sky-900 rounded-3xl w-[12.5rem] h-auto p-1'>Learn more</button>
        </div>
    </div>
  )
}

export default Leading
