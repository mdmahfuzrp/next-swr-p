"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(48 * 60 * 60); // 48 hours in seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return (
      <div className="text-primary flex gap-1 items-center text-xs md:text-base">
        <span className="bg-primary text-white rounded-[4px] py-[4px] px-2">
          {hours}
        </span>{" "}
        :
        <span className="bg-primary text-white rounded-[4px] py-[4px] px-2">
          {minutes < 10 ? "0" : ""}
          {minutes}
        </span>{" "}
        :
        <span className="bg-primary text-white rounded-[4px] py-[4px] px-2">
          {remainingSeconds < 10 ? "0" : ""}
          {remainingSeconds}
        </span>
      </div>
    );
  };

  return <div className="timer">{formatTime(timeRemaining)}</div>;
};

export default Timer;
