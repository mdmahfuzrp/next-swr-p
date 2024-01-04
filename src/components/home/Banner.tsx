import React from "react";
import Categories from "./Categories";
import { RiSearchLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import Slider from "./Slider";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative md:h-[381px]">
      <div className="hidden md:block">
        <Slider
          images={[
            "images/banner.png",
            "images/banner2.png",
            "images/banner3.png",
          ]}
          delay={3000}
        />
      </div>
      {/* Search box -> hindden on medium device */}
      <div className="md:hidden w-full mx-auto bg-red-600 flex items-center justify-center">
        <div className="w-fit text-white absolute top-3 flex items-center gap-4">
          <div className="bg-black/60 rounded-full flex items-center ">
            <span className="pl-4">
              <RiSearchLine />
            </span>
            <input
              type="text"
              className="bg-transparent p-2 outline-none"
              placeholder="Search"
            />
          </div>
          <Link href="#">
            <button className="bg-black/60 p-3 rounded-full text-lg">
              <BsCart3 />
            </button>
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <Slider
          images={[
            "mobileB/banner.png",
            "mobileB/banner2.png",
            "mobileB/banner3.png",
          ]}
          delay={3000}
        />
      </div>
      <div className="hidden md:block w-main relative  h-[381px] z-10">
        <Categories />
      </div>
    </div>
  );
};

export default Banner;
