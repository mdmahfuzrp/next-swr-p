import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import P1 from "@/assets/products/p1.png";
import Link from "next/link";

const Card = ({ product }: any) => {
  return (
    <div className="desktop:w-[185px] bg-white border group">
      <div className="relative overflow-hidden">
        <div className="absolute right-0 p-3">
          <p className="w-fit cursor-pointer rounded-full text-gray-500 desktop:text-white bg-white desktop:bg-gray-600/60 hover:bg-primary p-1">
            <IoMdHeartEmpty />
          </p>
        </div>
        {product ? (
          <Image
            src={product.img}
            className="w-full h-full object-cover cursor-pointer"
            alt="Product"
          />
        ) : (
          <img src="/images/monitor.jpg" alt="" />
        )}
        <img
          src="/images/dis.png"
          className=" -mt-[32px] pb-[12px] ml-[10px]"
          alt=""
        />
      </div>
      <div className="px-2 py-3">
        <Link href="#">
          <h2 className="text-xs md:text-sm group-hover:text-primary">
            {product?.title || "Airpods Pro Made In Dubai Bluetooth Earbuds"}
          </h2>
        </Link>
        <div className="flex items-center gap-3 mt-2">
          <h3 className="text-primary text-xs md:text-base">৳ 1,9900</h3>
          <span className="line-through text-xs text-gray-500">৳ 3000</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
