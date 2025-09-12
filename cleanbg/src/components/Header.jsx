import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex justify-between items-center max-sm:flex-col-reverse gap-y-10 mt-5 md:mt-6 '>
        <div className="w-full flex-col gap-y-5 sm:w-1/2 sm:gap-6">

        <h1 className=" max-sm:text-3xl :text-4xl xl:text-5xl font-semibold mb-3">Remove the <span className='bg-clip-text text-transparent font-bold bg-gradient-to-r from-green-700  to-lime-400  '>Background</span> for Images free</ h1>
        <p className=" amx-sm:text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Fugiat doloremque provident aut saepe nobis</p>
        <div className=" ">
            <input type="file" className='hidden'id='upload1' />
            <label htmlFor="upload1" className='inline-flex gap-3 px-6 py-3  items-center bg-gradient-to-r from-green-700  to-lime-400 bg-transparent rounded-full hover:scale-90  duration-100 hover:bg-gradient-to-r hover:to-green-700  hover:from-lime-400 hover:bg-transparent hover:duration-100'><img src={assets.upload_btn_icon} alt="" className='w-3 md:w-5'/><p className="text-white  text-sm md:text-md font-semibold">Upload Image</p></label>
        </div>
        </div>
        <div className="w-full max-w-sm sm:w-1/2"><img src={assets.header_img} alt="" /></div>

    </div>
  )
}

export default Header