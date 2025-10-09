import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const {openSignIn} = useClerk();
  const {isSignedIn} = useUser();
  return (
    <div className=" flex  justify-between  items-center">
        <Link to="/"> 
        <div className="inline-flex gap-2 relative overflow-hidden"> 
   <img src={assets.logo_icon} alt=""  className='w-9 md:w-10'/>
        <div className="text-sm md:text-md lg:text-3xl tracking-wide font-bold text-zinc-900">
          Clean<span className="text-zinc-500">bg</span></div>
        </div></Link>
        <div className="flex gap-7 items-center"><a href=" " className="max-sm::hidden text-sm lg:text-xl">Contact</a>
       { isSignedIn?
       <div><UserButton/></div> :
        <button onClick={()=>{openSignIn({})}} className='bg-zinc-700 flex items-center gap-2 px-3 p-2 rounded-full text-sm text-white  hover:scale-110 transition-all duration-100 md:text-md font-semibold'>Let's start<img src={assets.arrow_icon} alt=""  className='text-cyan-400 w-3 max-sm:w-3 md:w-4   '/></button>
        }
        </div>

    </div>
  )
}

export default Navbar