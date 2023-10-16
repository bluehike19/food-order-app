"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { clearInterval } from "timers";

const data = [
  {
    id: 1,
    title: "always fresh, crispy & hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deilver your order wherever you are in Nairobi",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your friends and family",
    image: "/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER  */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-4xl -mb-3 xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-2 px-6 mb-3">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className="w-full flex-1 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt=""
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
