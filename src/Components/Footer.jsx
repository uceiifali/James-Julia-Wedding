import React from "react";
import Crown from "../images/crown.png";

const Footer = () => {
  return (
    <div className="h-[50vh]  bg-black flex flex-col items-center justify-center border-none">
      <div className="flex flex-col items-center justify-center gap-5 mt-20">
        <img className="w-[50%]" src={Crown} alt="Crown" />
        <h1 className="font-love font-normal text-6xl text-white">
          James & Julia
        </h1>
        <h6 className="font-normal text-lg text-white ">
          11 November, 2022 – California
        </h6>
      </div>
    </div>
  );
};

export default Footer;
