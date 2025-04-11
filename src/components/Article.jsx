import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const articles = [
  {
    image: 'images/articleimg1.png',
    title: 'Disease detection, check up in the laboratory',
    text: 'In this case, the role of the health laboratory is very important to do a disease detection...'
  },
  {
    image: 'images/articleimg2.png',
    title: 'Herbal medicines that are safe for consumption',
    text: 'Herbal medicine is very widely used at this time because of its very good for your health...'
  },
  {
    image: 'images/articleimg3.png',
    title: 'Natural care for healthy facial skin',
    text: 'A healthy lifestyle should start from now and also for your skin health. There are some...'
  }
];

const Article = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[90%] mx-auto my-10'>
      <div className='text-center'>
        <h2 className='text-xl md:text-4xl font-medium mb-2'>Check out our latest article</h2>
        <hr className="w-[3.5rem] border-t-2 border-gray-600 mb-4 mx-auto" />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {articles.map((article, index) => (
          <div key={index} className='flex flex-col border-4 border-white rounded-xl shadow-lg overflow-hidden'>
            <img src={article.image} alt='article image' className='w-full rounded-t-2xl'/>
            <h4 className='text-xl font-bold p-4'>{article.title}</h4>
            <p className='text-[#7D7987] text-md px-4'>{article.text}</p>
            <div className='flex justify-center w-full mt-6 mb-4'>
              <button className='flex items-center justify-center text-[#458FF6] border border-[#458FF6] hover:bg-[#458FF6] hover:text-white rounded-3xl w-[12.5rem] h-auto p-2 transition'>
                <span>Read more</span>
                <AiOutlineArrowRight className='ml-2' size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10'>
        <button className='text-[#458FF6] border border-[#458FF6] hover:bg-[#458FF6] hover:text-white rounded-3xl w-[12.5rem] h-auto p-2 transition'>
          View more
        </button>
      </div>
    </div>
  )
}

export default Article;
