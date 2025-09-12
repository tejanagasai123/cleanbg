import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className=" gap-y-10 mt-5 md:mt-16">
      <h1 className=" text-xl md:text-3xl text-center font-bold bg-clip-text text-transparent  bg-gradient-to-r from-zinc-800  to-zinc-500 ">
        {" "}
        Steps to Remove{" "}
        <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-green-700  to-lime-400  ">
          Background
        </span>{" "}
        <br /> In Image Seconds
      </h1>
      <div className="flex  flex-wrap justify-evenly gap-3 py-6 px-4 md:py-10 md:px-6 ">
        <div className="flex items-start gap-3 px-4 py-2  md:py-4 drop-shadow-md bg-white hover:scale-90 transition-all duration-150 ease-in-out ">
          <img
            src={assets.upload_btn_icon}
            alt=""
            className="max-w-9 bg-transparent font-bold bg-gradient-to-r from-blue-700  to-sky-400 p-2 rounded-md"
          />
          <div className=" flex-col gap-2">
            <h1 className="font-semibold text-black text-md md:text-lg  ">
              Remove BG
            </h1>
            <p className="text-xs">Lorem ipsum dolor sit amet?</p>
          </div>
        </div>
        <div className="flex items-start gap-3 px-4 py-2  md:py-4 drop-shadow-md bg-white hover:scale-90 transition-all duration-150 ease-in-out ">
          <img
            src={assets.upload_btn_icon}
            alt=""
            className="max-w-9 bg-transparent font-bold bg-gradient-to-r from-blue-700  to-sky-400 p-2 rounded-md"
          />
          <div className=" flex-col gap-2">
            <h1 className="font-semibold text-black text-lg md:text-xl ">
              Remove BG
            </h1>
            <p className="text-xs">Lorem ipsum dolor sit amet?</p>
          </div>
        </div>
        <div className="flex items-start gap-3 px-4 py-2  md:py-4 drop-shadow-md bg-white hover:scale-90 transition-all duration-150 ease-in-out ">
          <img
            src={assets.upload_btn_icon}
            alt=""
            className="max-w-9 bg-transparent font-bold bg-gradient-to-r from-blue-700  to-sky-400 p-2 rounded-md"
          />
          <div className=" flex-col gap-2">
            <h1 className="font-semibold text-black text-lg md:text-xl ">
              Remove BG
            </h1>
            <p className="text-xs">Lorem ipsum dolor sit amet?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
