import React from "react";
import {
  FcBusinesswoman,
  FcShop,
  FcCloseUpMode,
  FcHome,
  FcInTransit,
} from "react-icons/fc";

import { FaChevronRight } from "react-icons/fa";

const CategoryData = [
  {
    icon: <FcShop />,
    title: "Mart",
  },
  {
    icon: <FcCloseUpMode />,
    title: "Fashion",
  },
  {
    icon: <FcBusinesswoman />,
    title: "Beauty",
  },
  {
    icon: <FcHome />,
    title: "Home Makeover",
  },
  {
    icon: <FcInTransit />,
    title: "Free Delivery",
  },
];

const TopCategory = () => {
  return (
    <div className="w-main">
      <div className="flex justify-between gap-0 md:gap-2 mt-4">
        {CategoryData?.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row text-center md:text-left items-center gap-1 md:gap-2 md:bg-white rounded-full p-1 md:p-2 lg:hover:shadow-md cursor-pointer hover:text-primary group duration-200"
          >
            <span className="p-3 lg:p-1 text-4xl md:text-2xl rounded-full bg-white lg:bg-orange-200/50">
              {item.icon}
            </span>
            <span className="text-xs md:text-sm lg:text-base">
              {item.title}
            </span>
            <span className="hidden lg:block ml-auto text-gray-400 pr-2 group-hover:text-primary">
              <FaChevronRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
