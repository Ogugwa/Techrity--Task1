import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

const Download = () => {
  return (
    <div className='mt-24 mb-8'>
      <div className='flex  flex-col md:flex-row w-full justify-between md:m-8 '>
        <div className='text-left flex flex-col justify-start w-full md:w-[30rem] h-auto p-4 md:-ml-12 mt-8 mb:mb-0 '>
            <h1 className='text-4xl md:text-5xl font-semibold mb-4'>Download our<br/>mobile apps</h1>   
            <hr className="w-[3.5rem] border-t-2 border-black-600 mb-2" />       
            <p className='mt-4 mb-4 text-gray-600 text-xl'>Our dedicated patient engagement app and <br/>
                web portal allow you to access information <br/>
                instantaneously (no tedeous form, long calls, <br/>
                or administrative hassle) and securely
            </p>
            <div className='flex flex-row justify-start items-center mt-6'>
                <button className='flex items-center justify-center gap-2 border border-blue-400 text-[#458FF6] hover:bg-sky-900 rounded-3xl w-[12.5rem] h-auto py-2 px-4'>
                    Download <AiOutlineArrowDown size={20} />
                </button>  
            </div>         
        </div>
        <div className='w-full md:w-[44rem] h-auto flex justify-center items-center'>
            <img src='/images/downloadbgimg.png' alt='heroimg1' />
        </div>       
      </div>
    </div>
  )
}

export default Download;
