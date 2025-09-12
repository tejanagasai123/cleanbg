import React from 'react'
import { assets } from '../assets/assets'

const Last = () => {
  return (
    <div className="mt-16  m-2 p-4 ">
          <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-zinc-700  to-zinc-400 mb-5 text-center ">
            See the magic. Try now
          </h3>
         <div className=" text-center mb-5 ">
                    <input type="file" className='hidden'id='upload1' />
                    <label htmlFor="upload1" className='inline-flex gap-3 px-4 py-3  items-center bg-gradient-to-r from-green-700  to-lime-400 bg-transparent rounded-full hover:scale-90  duration-100 hover:bg-gradient-to-r hover:to-green-700  hover:from-lime-400 hover:bg-transparent hover:duration-100'><img src={assets.upload_btn_icon} alt="" className='w-3 md:w-4'/><p className="text-white text-sm md:text-lg font-semibold">Upload Your Image</p></label>
                </div>
        </div>
  )
}

export default Last