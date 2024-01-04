"use client";
import React, { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  delay: number;
}

const Slider: React.FC<ImageSliderProps> = ({ images, delay }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-full absolute overflow-hidden z-0">
      <img
        src={images[currentSlide]}
        className="w-full h-full object-cover"
        alt={`Slide ${currentSlide}`}
      />
      <div className="pagination-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
