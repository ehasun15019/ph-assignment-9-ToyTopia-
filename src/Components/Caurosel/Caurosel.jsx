import React from "react";
import { assets } from "../../assets/assets";

const Caurosel = () => {
  return (
    <div className="carousel w-full mt-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={assets.slider1}
          className="w-full h-[250px] md:h-[400px] lg:h-[700px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={assets.slider2}
          className="w-full h-[250px] md:h-[400px] lg:h-[700px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={assets.slider3}
          className="w-full h-[250px] md:h-[400px] lg:h-[700px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
