import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import React from "react";
import Card from "./Card";
import { Products } from "@/data/products";
import Timer from "../common/Timer";

const FlashSale = () => {
  return (
    <div className="w-main mt-8 bg-white px-5 py-3 mb-10">
      <div className="w-full flex justify-between border-b border-gray-200/80 pb-3">
        <div className="flex items-center">
          <h3 className="text-primary text-xl">FlashSale</h3>
          <div className="ml-40 flex items-center gap-4">
            <p className="text-gray-500">Ending in</p>
            <Timer />
          </div>
        </div>
        <Link href="#" className="flex items-center gap-2 text-primary">
          See More <GoChevronRight />
        </Link>
      </div>

      {/* Cards */}
      <div className="pt-3 flex justify-between">
        {Products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;