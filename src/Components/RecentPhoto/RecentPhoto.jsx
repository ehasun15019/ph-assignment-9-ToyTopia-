import React from "react";
import Title from "../Title/Title";
import { assets } from "../../assets/assets";

const RecentPhoto = () => {
  return (
    <div>
      <div className="recent-sec-header">
        <Title title1={<>Recent photoShoots</>} title2={<>Check gallery</>} />
      </div>

      <div className="gallery-sec px-4 sm:px-10 md:px-20 my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <img
          src={assets.r1}
          alt="gallery"
          className="w-full h-60 md:h-80 object-cover rounded-md"
        />
        <img
          src={assets.r2}
          alt="gallery"
          className="w-full h-60 md:h-80 object-cover rounded-md"
        />
        <img
          src={assets.r3}
          alt="gallery"
          className="w-full h-60 md:h-80 object-cover rounded-md"
        />
        <img
          src={assets.r4}
          alt="gallery"
          className="w-full h-60 md:h-80 object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default RecentPhoto;
