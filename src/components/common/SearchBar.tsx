import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="w-full bg-[#EFF0F5] rounded-[10px] h-[44px] flex gap-3 hover:shadow-lg">
      <input
        className="w-full bg-transparent px-4 py-3 outline-none"
        type="text"
        placeholder="Search"
      />
      <button className="bg-primary rounded-[10px] py-3 px-4 text-lg text-white">
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
