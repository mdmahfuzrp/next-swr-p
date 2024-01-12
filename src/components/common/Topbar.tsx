"use client"
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import React, { useEffect, useRef } from "react";

const Topbar = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Component is in the viewport, perform mount logic
          console.log('Component entered viewport - mount');
        } else {
          // Component is out of the viewport, perform unmount logic
          console.log('Component left viewport - unmount');
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Update ref value when the component renders
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="hidden lg:block bg-[#f0f1f1]" ref={componentRef}>
      <div className="w-main py-2 text-xs text-[#434343] flex justify-between">
        <ul className="flex gap-8">
          <li className="group">
            <button className="flex items-center gap-2">
              Language <FaAngleDown />
            </button>
            <ul className="w-fit absolute z-20 shadow-lg border bg-white hidden group-hover:block">
              <li className="py-2 px-6 hover:bg-gray-200 border-t cursor-pointer">
                Arabic
              </li>
              <li className="py-2 px-6 hover:bg-gray-200 border-t cursor-pointer">
                Bangla
              </li>
              <li className="py-2 px-6 hover:bg-gray-200 border-t cursor-pointer">
                English
              </li>
              <li className="py-2 px-6 hover:bg-gray-200 border-t cursor-pointer">
                Hindi
              </li>
            </ul>
          </li>
          <li>Help Center</li>
          <li>Helpline: 0964781656</li>
        </ul>

        <ul className="flex gap-8">
          <li>Become a Seller</li>
          <li>Order Track</li>
          <li>
            <Link href="/#" className="text-primary">
              Sign up / Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
