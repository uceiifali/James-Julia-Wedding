import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import fr1 from "../images/fr1";
import fr2 from "../images/fr2";
import fr3 from "../images/fr3";
import fr4 from "../images/fr4";
import fr5 from "../images/fr5.jpg";
import fr6 from "../images/fr6.jpg";
import fr7 from "../images/fr7.jpg";
import fr8 from "../images/fr8.jpg";
const Pics = [
  { src: fr1 },
  { src: fr2 },
  { src: fr3 },
  { src: fr4 },
  { src: fr5 },
  { src: fr6 },
  { src: fr7 },
  { src: fr8 },
];
const Friends = () => {
  return (
    <div id="friends">
      <div className="flex flex-col items-center justify-center  mt-20">
        <h4 className="font-inter font-normal text-2xl">Friends & Families</h4>
        <p className="font-inter text-center font-normal text-xs text-[#777777] lg:w-[20%] w-[75%] mt-5">
          Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci
          elit genes tristique.
        </p>
      </div>
      <div>
        <Splide
          id="pics"
          className="w-full mt-10 flex items-center justify-center"
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
            <SplideSlide key={i}>
              <img
                className="object-cover h-[100%] rounded-lg"
                src={item.src}
                alt=""
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Friends;
