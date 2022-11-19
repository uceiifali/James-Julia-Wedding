import React from "react";
import Footer from "./Footer";

const Form = () => {
  return (
    <>
      <div
        className="flex items-center justify-center lg:flex-row flex-col mt-40 gap-6 z-20"
        id="location"
      >
        <div className="flex items-center justify-center flex-col  bg-[#F4F4F41A] lg:w-[30%] w-[80%] rounded h-96 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white font-inter font-normal text-xl ">
              Wedding Ceremony
            </h1>
            <p className="text-white font-inter font-normal text-xs mt-4">
              703 Canterbury Drive
            </p>
            <p className="text-white font-inter font-normal text-xs">
              Chesterfield, VA 23832
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-2 gap-2">
            <h1 className="text-white font-inter font-normal text-xl mt-3">
              Party
            </h1>
            <p className="text-white font-inter font-normal text-xs mt-2">
              592 NW. Summerhouse Lane
            </p>
            <p className="text-white font-inter font-normal text-xs">
              Winter Haven, FL 33880
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-2 gap-2">
            <h1 className="text-white font-inter font-normal text-xl mt-3">
              Accomodations
            </h1>
            <p className="text-white font-inter font-normal text-xs mt-2">
              453 Manor Station Street
            </p>
            <p className="text-white font-inter font-normal text-xs">
              Fairburn, GA 30213
            </p>
          </div>
        </div>
        <div className="flex  justify-center flex-col lg:w-[30%] w-[70%] gap-5 ">
          <div>
            <h1 className="text-white font-inter font-normal text-3xl  ">
              R.S.V.P.
            </h1>
            <p className="text-xs font-inter font-normal text-[#cccccc] ">
              If you have any questions let us know how we can help you.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-white rounded text-[#4d4d4d] font-inter font-normal text-sm p-2 border-none outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white rounded text-[#4d4d4d] font-inter font-normal text-sm p-2 border-none outline-none"
            />
            <input
              type="text"
              placeholder="Guests"
              className="bg-white rounded text-[#4d4d4d] font-inter font-normal text-sm p-2 border-none outline-none"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="bg-white rounded text-[#4d4d4d] font-inter font-normal text-sm p-2 border-none outline-none"
            />
            <button className="text-white bg-[#E75E5E] p-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
