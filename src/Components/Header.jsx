import React from "react";
import Heart1 from "../images/heart1.png";
import Heart2 from "../images/heart2.png";
import Crown from "../images/crown.png";

const Header = () => {
  return (
    <div className="h-screen w-full bg-[#E75E5E] flex items-center justify-center relative -z-10">
      <div className="flex absolute top-0 left-0">
        <img className="w-[40%]" src={Heart1} alt="heart1" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5  z-50">
        <img className="w-[60%]" src={Crown} alt="Crown" />
        <h1 className="font-love font-normal text-6xl text-white">
          James & Julia
        </h1>
        <h6 className="font-normal text-lg text-white ">
          11 November, 2022 – California
        </h6>
      </div>
      <div className="flex justify-end items-end absolute bottom-0 right-0">
        <img className="w-[40%]" src={Heart2} alt="heart" />
      </div>
    </div>
  );
};

export default Header;
