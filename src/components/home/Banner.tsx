import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="relative">
      <Slider
        images={[
          "images/banner.png",
          "images/banner2.png",
          "images/banner3.png",
        ]}
        delay={3000}
      />
      <div className="w-main relative  h-[381px] object-cover z-10">
        <Categories />
      </div>
    </div>
  );
};

export default Banner;
