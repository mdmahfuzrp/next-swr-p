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
    title: "Beauty & Glamour",
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
    <div className="w-main grid grid-cols-5 gap-2 mt-4">
      {CategoryData?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-white rounded-full p-2 hover:shadow-md cursor-pointer hover:text-primary group duration-200"
        >
          <span className="p-1 text-2xl rounded-full bg-orange-200/50">
            {item.icon}
          </span>
          <span>{item.title}</span>
          <span className="ml-auto text-gray-400 pr-2 group-hover:text-primary">
            <FaChevronRight />
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopCategory;
