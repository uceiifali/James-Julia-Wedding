import React from "react";
import heart3 from "../images/heart3.png";
const Date = () => {
  return (
    <div
      id="date"
      className="flex items-center justify-center flex-col mt-[8rem] "
    >
      <div className="flex items-center justify-center flex-col lg:flex-row  gap-16 w-full">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-normal">James Arnold</h1>
          <p className="font-inter font-normal text-[#777777] text-xs ">
            Designer from LA
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-36 object-fill" src={heart3} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-normal">Julia Lee</h1>
          <p className="font-inter font-normal text-[#777777] text-xs ">
            Photographer from California
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col gap-6 mt-20"
        id="day"
      >
        <p className="font-inter font-normal text-base ">GETTING MARRIED ON</p>
        <h1 className="font-inter font-bold text-7xl">11.11.2022</h1>
      </div>
    </div>
  );
};

export default Date;
