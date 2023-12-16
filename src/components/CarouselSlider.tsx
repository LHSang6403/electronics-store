"use client";

import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import sliderImgs from "@dummyApi/slider";
import Image from "next/image";

async function waiting(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 0));
}

async function CarouselSlider(): Promise<JSX.Element> {
  await waiting();

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-4 top-48">
        <button className="w-8 sm:w-6 opacity-50 cursor-pointer">
          <Image
            src="/assets/directions/arrow-left.png"
            alt="Left Arrow"
            width={128}
            height={128}
          />
        </button>
      </div>
    ),
    nextArrow: (
      <div className="mr-4 top-48">
        <button className="w-8 sm:w-6 opacity-50 cursor-pointer">
          <Image
            src="/assets/directions/arrow-right.png"
            alt="Right Arrow"
            width={128}
            height={128}
          />
        </button>
      </div>
    ),
  };

  return (
    <div className="h-full w-full">
      <Zoom {...zoomInProperties}>
        {sliderImgs.map((each, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-[500px] object-cover"
              alt={`slider-img-${index}`}
              src={each.image}
            />
            <div className="relative w-[80%] mx-auto -top-36  z-10  text-black">
              <p className="w-fit ml-5 sm:ml-0 px-5 py-1 bg-primary text-justify text-3xl sm:text-xl font-bold">
                {each.title}
              </p>
            </div>
            <p className="relative w-[80%] mx-auto -top-32 z-10 text-white sm:text-sm">
              {each.description}
            </p>
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default CarouselSlider;
