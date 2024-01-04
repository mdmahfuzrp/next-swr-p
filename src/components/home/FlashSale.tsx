"use client";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import React, { useState } from "react";
import Card from "./Card";
import { Products } from "@/data/products";
import Timer from "../common/Timer";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "../common/CategoryCard";
import { Grid } from "swiper/modules";

const FlashSale = () => {
  return (
    <>
      <div className="mx-3 desktop:mx-0 w-main mt-4 desktop:mt-8 bg-white px-5 py-3 desktop:mb-10">
        <div className="w-full flex justify-between desktop:border-b border-gray-200/80 desktop:pb-3">
          <div className="flex items-center">
            <h3 className="text-primary text-base md:text-xl">FlashSale</h3>
            <div className="ml-5 md:ml-40 flex items-center gap-4">
              <p className="text-gray-500 hidden md:block">Ending in</p>
              <Timer />
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-primary"
          >
            See More <GoChevronRight />
          </Link>
        </div>

        {/* Cards -> hide on small device */}
        <div className="hidden pt-3 desktop:flex justify-between">
          <Swiper spaceBetween={10} slidesPerView={6}>
            {Products.map((product) => (
              <SwiperSlide key={product.id}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* show on small device */}
      {/* <div className="desktop:hidden mb-10 mt-1 mx-3 grid grid-cols-12 grid-rows-2 gap-1">
        <div className="col-span-6 md:col-span-4 row-span-2">
          <Card />
        </div>
        <div className="bg-white col-span-3 md:col-span-2">
          <img
            src="mobileB/shirt.png"
            className="w-full object-contain"
            alt="shirt"
          />
          <h4 className="text-center pb-2">Jerseys</h4>
        </div>
        <div className="bg-white col-span-3 md:col-span-2">
          <img
            src="mobileB/shirt.png"
            className="w-full object-contain"
            alt="shirt"
          />
          <h4 className="text-center pb-2">Jerseys</h4>
        </div>
        <div className="bg-white col-span-3 md:col-span-2">
          <img
            src="mobileB/shirt.png"
            className="w-full object-contain"
            alt="shirt"
          />
          <h4 className="text-center pb-2">Jerseys</h4>
        </div>
        <div className="bg-white col-span-3 md:col-span-2">
          <img
            src="mobileB/shirt.png"
            className="w-full object-contain"
            alt="shirt"
          />
          <h4 className="text-center pb-2">Jerseys</h4>
        </div>
      </div> */}

      <div className="desktop:hidden mb-10 mt-1 mx-3 gap-1">
        <Swiper
          spaceBetween={5}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
            200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FlashSale;
