import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="absolute p-10 flex items-center justify-between w-full">
      <div className="flex items-center justify-center">
        <a href="/">
          <h1 className="text-white font-love text-2xl">James & Julia</h1>
        </a>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-5">
        <a href="/">
          <p className="font-inter text-white text-base uppercase hover:text-black transition-all duration-150">
            Home
          </p>
        </a>

        <a
          href="#pics"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Pics</p>
        </a>

        <a
          href="#date"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Date</p>
        </a>

        <a
          href="#story"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Story</p>
        </a>

        <a
          href="#friends"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Friends</p>
        </a>

        <a
          href="#day"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Wedding Day</p>
        </a>
        <a
          href="#gallery"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Gallery</p>
        </a>
        <a
          href="#location"
          className="text-white text-base uppercase hover:text-black transition-all duration-150"
        >
          <p className="font-inter">Location</p>
        </a>
      </div>
      <div className="lg:hidden">
        <FaBars
          className="text-white text-xl absolute cursor-pointer transition-all duration-300 delay-500"
          onClick={() => setMobile(true)}
        />
      </div>
      {mobile && (
        <div
          className="absolute top-0 left-0 bg-white w-[100vw] h-[100vh] 
      flex items-center justify-center flex-col gap-6 transition-all delay-500 z-[100]"
        >
          <AiOutlineClose
            className="text-black text-2xl cursor-pointer"
            onClick={() => setMobile(false)}
          />
          <a href="/" onClick={() => setMobile(false)}>
            <p className="font-inter text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200">
              Home
            </p>
          </a>

          <a
            href="#pics"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Pics</p>
          </a>

          <a
            href="#date"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Date</p>
          </a>

          <a
            href="#story"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Story</p>
          </a>

          <a
            href="#friends"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Friends</p>
          </a>

          <a
            href="#day"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Wedding Day</p>
          </a>
          <a
            href="#gallery"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Gallery</p>
          </a>
          <a
            href="#location"
            onClick={() => setMobile(false)}
            className="text-black text-2xl uppercase hover:text-[#E75E5E] transition-all duration-200"
          >
            <p className="font-inter">Location</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
