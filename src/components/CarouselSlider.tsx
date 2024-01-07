"use client";

import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import sliderImgs from "@dummyApi/slider";
import Image from "next/image";

function CarouselSlider(): JSX.Element {
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-72 2xl:ml-32 lg:ml-20 bottom-24 xl:bottom-12">
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
      <div className="mr-72 2xl:mr-32 lg:mr-20 bottom-24 xl:bottom-12">
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
    <>
      <Zoom {...zoomInProperties}>
        {sliderImgs.map((each, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              className="w-full h-[650px] object-cover rounded-3xl"
              alt={`slider-img-${index}`}
              src={each.image}
            />
            <p className="absolute bottom-24 xl:bottom-36 sm:bottom-28 left-12 xl:left-6 z-10 px-5 py-1 bg-primary text-justify text-3xl sm:text-xl font-bold">
              {each.title}
            </p>
            <p className="absolute w-[80%] bottom-10 left-12 xl:left-6 z-10 text-white sm:text-sm">
              {each.description}
            </p>
          </div>
        ))}
      </Zoom>
    </>
  );
}

export default CarouselSlider;
