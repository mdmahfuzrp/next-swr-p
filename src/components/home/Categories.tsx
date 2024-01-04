"use client";
import React, { useState } from "react";
import { category_data } from "@/data/categories";
import { FaChevronRight } from "react-icons/fa";

type Category = {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  sub_categories?: Category[];
};

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<Category | null>(
    null
  );

  const [activeFirstLayer, setActiveFirstLayer] = useState<Category | null>(
    null
  );
  const [activeSecondLayer, setActiveSecondLayer] = useState<Category | null>(
    null
  );

  const handleCategoryHover = (category: Category) => {
    setHoveredCategory(category);
    setHoveredSubCategory(null);
    setActiveFirstLayer(category);
    setActiveSecondLayer(null);
  };

  const handleSubCategoryHover = (subCategory: Category) => {
    setHoveredSubCategory(subCategory);
    setActiveSecondLayer(subCategory);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredSubCategory(null);
    setActiveFirstLayer(null);
    setActiveSecondLayer(null);
  };

  return (
    <div
      className="w-fit h-full flex text-xs text-[#2E2E2E]"
      onMouseLeave={handleMouseLeave}
    >
      {/* First Layer */}
      <div className="bg-white min-w-[230px] px-4 h-full">
        {category_data.map((category) => (
          <div
            key={category.id}
            className={`flex items-center cursor-pointer py-2 hover:text-primary ${
              (activeFirstLayer === null && hoveredCategory === category) ||
              activeFirstLayer === category
                ? "text-primary"
                : ""
            }`}
            onMouseEnter={() => handleCategoryHover(category)}
          >
            <span>{React.createElement(category.icon)}</span>
            <span className="ml-2">{category.title}</span>
            {(activeFirstLayer === null && hoveredCategory === category) ||
            activeFirstLayer === category ? (
              <div className="ml-auto">
                <FaChevronRight />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      {/* Second Layer */}
      {hoveredCategory && (
        <div className="bg-white min-w-[230px] border-l">
          {hoveredCategory.sub_categories?.map((subCategory, index) => (
            <div
              key={index}
              className={`flex cursor-pointer px-4 py-2 hover:text-primary ${
                activeSecondLayer === subCategory ? "text-primary" : ""
              }`}
              onMouseEnter={() => handleSubCategoryHover(subCategory)}
            >
              <span>{subCategory.title}</span>
              {activeSecondLayer === subCategory ? (
                <div className="ml-auto">
                  <FaChevronRight />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}

      {/* Third Layer */}
      {hoveredSubCategory && (
        <div className="bg-white min-w-[230px] border-l">
          {hoveredSubCategory.sub_categories?.map((thirdLayer, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:text-primary cursor-pointer"
            >
              <span>{thirdLayer.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
