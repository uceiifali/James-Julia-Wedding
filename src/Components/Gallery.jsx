import React from "react";
import gal1 from "../images/gal1";
import gal2 from "../images/gal2";
import gal3 from "../images/gal3";
import gal4 from "../images/gal4";
import gal5 from "../images/gal5.jpg";
import gal6 from "../images/gal6.jpg";
import gal7 from "../images/gal7.jpg";
import gal8 from "../images/gal8.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Form from "./Form";
const gallery = [
  { src: gal1 },
  { src: gal2 },
  { src: gal3 },
  { src: gal4 },
  { src: gal5 },
  { src: gal6 },
  { src: gal7 },
  { src: gal8 },
];
const Gallery = () => {
  return (
    <div className=" bg-black" id="gallery">
      <Splide
        className="w-full"
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
        {gallery.map((item, i) => (
          <SplideSlide key={i}>
            <img className="rounded-xl mt-4 w-full" src={item.src} alt="" />
          </SplideSlide>
        ))}
      </Splide>
      <Form />
    </div>
  );
};

export default Gallery;
