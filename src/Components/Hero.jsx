import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import pic1 from "../images/pic1";
import pic2 from "../images/pic2";
import pic3 from "../images/pic3";
import pic4 from "../images/pic4";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";

const Pics = [
  { src: pic1 },
  { src: pic2 },
  { src: pic3 },
  { src: pic4 },
  { src: pic5 },
  { src: pic6 },
  { src: pic7 },
  { src: pic8 },
];
const Hero = () => {
  return (
    <Splide
      id="pics"
      className="w-full -mt-20 flex items-center justify-center"
      options={{
        arrows: false,
        pagination: false,
        perPage: 4,
        perMove: 1,
        type: "loop",
        rewind: true,
        autoplay: true,
        keyboard: "global",
        gap: "1rem",
        padding: "2rem",
        breakpoints: {
          1200: { perPage: 3 },
          991: { perPage: 2 },
          768: { perPage: 2 },
          500: { perPage: 1 },
          425: { perPage: 1 },
        },
      }}
    >
      {Pics.map((item, i) => (
        <SplideSlide
          className="flex items-center justify-center cursor-pointer"
          key={i}
        >
          <img
            className="lg:w-[100%] w-[80%] rounded-md cursor-pointer z-[-10]"
            src={item.src}
            alt=""
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Hero;
