import React from "react";
import Logo from "@/assets/basic/logo.png";
import Cloud from "@/assets/basic/cloud.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden w-full bg-white h-[70px] md:flex items-center">
      <div className="w-[1220px] mx-auto px-3 lg:px-0 flex gap-10 items-center justify-between">
        <Image src={Logo} alt="Logo" priority />
        <SearchBar />
        <div className="flex gap-3">
          <Link href="#">
            <button className="bg-[#f5f5f5] text-[#707070] hover:bg-primary hover:text-white rounded-lg p-2">
              <IoPersonOutline />
            </button>
          </Link>
          <Link href="#">
            <button className="bg-[#f5f5f5] text-[#707070] hover:bg-primary hover:text-white rounded-lg p-2">
              <IoIosHeartEmpty />
            </button>
          </Link>
          <Link href="#">
            <button className="bg-[#f5f5f5] text-[#707070] hover:bg-primary hover:text-white rounded-lg p-2">
              <BsCart3 />
            </button>
          </Link>
        </div>
        <Image
          className="cursor-pointer hidden lg:block"
          src={Cloud}
          alt="Logo"
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
