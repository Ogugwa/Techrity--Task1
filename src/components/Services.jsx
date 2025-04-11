import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center w-full h-auto p-4'>
            <h2 className='mb-4 font-semibold text-4xl'>Our services</h2>
            <hr className="w-[3.5rem] border-t-2 border-black-600 mb-2" />
            <p className='mt-2'>We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment<br/>
                with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </p>
        </div>
        {/* Icon Components Segment */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
            <div className='flex flex-col text-left border-2 border-white  w-[20rem] h-auto p-4 m-4 rounded-xl shadow-lg'>
                <img src='./images/Search icon.png' alt='image of a search icon' className='w-[4rem] h-auto mb-2'/>
                <h3 className='text-[1.5rem] font-semibold'>Search doctor</h3>
                <p>Choose your doctor from thousands<br/>
                 of specialist, general, and trusted <br/>
                 hospitals
                </p>
            </div>
            
            <div className='flex flex-col text-left border-2 border-white  w-[20rem] h-auto p-4 m-4 rounded-xl shadow-lg'>
                <img src='./images/medicineimg.png' alt='image of medicine' className='w-[4rem] h-auto mb-2'/>
                <h3 className='text-[1.5rem] font-semibold'>Online pharmacy</h3>
                <p>Buy  your medicines with our<br/>
                     mobile application with a simple<br/>
                      delivery system
                </p>
            </div>
            <div className='flex flex-col text-left border-2 border-white  w-[20rem] h-auto p-4 m-4 rounded-xl shadow-lg'>
                <img src='./images/consultimg.png' alt='consultation image' className='w-[4rem] h-auto mb-2'/>
                <h3 className='text-[1.5rem] font-semibold'>Consultation</h3>
                <p>Free consultation with our trusted<br/>
                    doctors and get the best<br/>
                     recomendations
                </p>
            </div>
            <div className='flex flex-col text-left border-2 border-white  w-[20rem] h-auto p-4 m-4 rounded-xl shadow-lg'>
                <img src='./images/detailsimg.png' alt='details image' className='w-[4rem] h-auto mb-2'/>
                <h3 className='text-[1.5rem] font-semibold'>Details info</h3>
                <p>Free consultation with our trusted<br/>
                     doctors and get the best<br/>
                      recomendations
                </p>
            </div>
            <div className='flex flex-col text-left border-2 border-white  w-[20rem] h-auto p-4 m-4 rounded-xl shadow-lg'>
                <img src='./images/emergency.png' alt='fist aid kit image' className='w-[4rem] h-auto mb-2'/>
                <h3 className='text-[1.5rem] font-semibold'>Emergency care</h3>
                <p>You can get 24/7 urgent care for<br/>
                     yourself or your children and your<br/>
                    lovely family
                </p>
            </div>
            <div className='flex flex-col text-left border-2 border-white  w-[20rem] h-auto p-4 m-4 rounded-xl shadow-lg'>
                <img src='./images/tracking.png' alt='health tracker image' className='w-[4rem] h-auto mb-2'/>
                <h3 className='text-[1.5rem] font-semibold'>Tracking</h3>
                <p>Track and save your medical history<br/>
                     and health data 
                </p>
            </div>
            <div className='flex flex-col justify-center items-center w-full  mt-8 md:ml-64 '>
                <div className='border border-blue-400  hover:bg-sky-900 rounded-3xl w-[12.5rem] h-auto p-1'>
                    <button className='text-[#458FF6] w-full'>Learn more</button>
                </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default Services
