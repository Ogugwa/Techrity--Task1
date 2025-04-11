// CustomArrows.js
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute -bottom-10 right-6 md:right-32 z-10 cursor-pointer text-white bg-[#5A98F2] p-2 rounded-full shadow-md hover:bg-[#458FF6] transition"
    >
      <FaArrowRight />
    </div>
  )
}

export const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute -bottom-10 left-6 md:left-32 z-10 cursor-pointer text-white bg-[#5A98F2] p-2 rounded-full shadow-md hover:bg-[#458FF6] transition"
    >
      <FaArrowLeft />
    </div>
  )
}
