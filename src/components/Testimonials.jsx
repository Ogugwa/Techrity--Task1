import React from 'react'
import Slider from 'react-slick'
import { CustomNextArrow, CustomPrevArrow } from './Arrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    name: 'Edward Newgate',
    title: 'Founder Circle',
    image: '/images/testimonial.png',
    feedback:
      'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.',
  },
  {
    name: 'Jane Doe',
    title: 'Product Manager',
    image: '/images/testimonial2.jpg',
    feedback:
      'This app made it easy for me to schedule appointments and track my health records in one place. Highly recommended!',
  },
  {
    name: 'Samuel Okoro',
    title: 'Health Enthusiast',
    image: '/images/testimonial3.jpg',
    feedback:
      'I love how simple and clean the interface is. Everything I need is just a tap away. Great work!',
  },
]

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }
  return (
    <div className='flex justify-center my-16 '>
      <div className='bg-gradient-to-r from-[#67C3F3] to-[#5A98F2]  text-white h-auto w-[90%] rounded-2xl'>
        <h1 className='font-semibold text-center text-xl md:text-4xl m-4'>What our customer are saying</h1>
        <hr className="w-[3.5rem] border-t-2 border-white mx-auto mb-8" /> 
        <Slider {...settings}>
  {testimonials.map((item, index) => (
    <div key={index} className="px-4 md:px-16 py-8">
      {/* 3-column layout for desktop */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left gap-4 md:gap-8">

        {/* Column 1: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-36 h-36 object-cover rounded-full"
          />
        </div>

        {/* Column 2: Name & Title */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-sm mb-2">{item.title}</p>
        </div>

        {/* Column 3: Feedback */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <p className="max-w-sm">{item.feedback}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  )
}

export default Testimonials
