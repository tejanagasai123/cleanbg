import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-3 p-3 mt-10 md:mt-20'>
        <div className="flex flex-wrap justify-between gap-4"> 
          <Link to="/"> 
        <div className="flex gap-1 items-center justify-center "> 
   <img src={assets.logo_icon} alt=""  className='w-6 md:w-10'/>
        <div className="text-sm md:text-lg font-bold text-zinc-900">
          BgRemover</div>
        </div></Link>
        <p className="mt-1 pl-4 text-zinc-800 text-sm md:text-md">| Copyright @tejanagasai2005 ! All Rights Reserved</p></div>
        <div className="flex gap-2 px-2 py-1 ">
            <img src={assets.facebook_icon} alt="" className="max-w-10" />
            <img src={assets.twitter_icon} alt="" className="max-w-10" />
            <img src={assets.google_plus_icon} alt="" className="max-w-10"/>
        </div>

    </div>
  )
}

export default Footer