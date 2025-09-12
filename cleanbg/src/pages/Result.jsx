import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='min-h-[75h] mx-4 my-6 md:mx-28 md:my-8 py-8'>
      <div className="bg-white px-4 py-7 shadow-md rounded-lg">
       <div className=" flex flex-col sm:grid grid-cols-2 gap-8">
         <div className="">
         <p className="font-semibold mb-3  text-gray-700">Original</p>
          
            <img src={assets.image_w_bg} alt="" className="rounded-md lg:rounded-lg " />
        </div>
        <div className="">

         <p className="font-semibold mb-3 text-gray-700">After Removing</p>
          
           <div className="overflow-hidden bg-layer rounded-md relative lg:rounded-lg"> 
            {/* <img src={assets.image_wo_bg} alt="" className="rounded-md lg:rounded-lg" /> */}
            <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
              <div className="border-4 h-14 w-14 border-blue-500 animate-spin border-t-transparent rounded-full"></div>
            </div>
            </div>
        </div>

       </div>
       
        <div className="flex justify-center sm:justify-end items-center text-sm gap-3 mt-6">
          <button className=" px-5 py-2.5  text-gray-800 bg-white rounded-full border-blue-500 border-2 hover:scale-105 transform transition-all duration-100">Try another image</button>
          <a href=" " className="px-8 py-2.5 bg-gradient-to-r from-green-700  to-lime-400 bg-transparent rounded-full hover:scale-105  duration-100 hover:bg-gradient-to-r hover:to-green-700  hover:from-lime-400 hover:bg-transparent hover:duration-100 font-semibold  text-gray-700 ">Download

          </a>
        </div>
      </div>
      
      </div>
  )
}

export default Result