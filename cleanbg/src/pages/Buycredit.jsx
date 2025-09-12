import React from 'react'
import { assets, plans } from '../assets/assets'

const Buycredit = () => {
  return (
    <div className='min-h-[75h] mx-4 my-6 md:mx-28 md:my-8 py-8 text-center'>
      <button className=' px-2 py-1 md:px-4 md:py-2 border-2 border-zinc-300 rounded-full text-sm md:text-md mb-4 md:mb-6 hover:scale-110 transform transition-all duration-100'> Our Plans</button>
      <h1 className=" text-transparent bg-clip-text font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 text-sm md:text-2xl">Choose the plan that's right for you</h1>
      <div className="flex flex-wrap justify-center mt-6 md:mt-10 gap-7">
        {plans.map((item,index)=>
         (
           <div className="bg-white shadow-md px-4 py-6  text-left hover:scale-110 tranform transition-all duration-100 " key={index}>
            <img src={assets.logo_icon} alt="" className="mb-2 w-[40px]" />
            <p className="font-bold text-zinc-800 text-sm md:text-lg ">{item.id}</p>
            <p className="text-sm text-zinc-500">{item.desc}</p>
             <p className="tet-sm text-zinc-700 mt-5"><span className="text-xl font-bold">${item.price}</span>/{item.credits}</p>
             <div className="text-center"><button className="px-5 py-2 text-white bg-black rounded-lg shadow-sm  text-sm font-bold mt-6 md:mt-9 text-center">Purchase</button></div>

           </div>
         ))}
      </div>
    </div>
  )
}

export default Buycredit