"use client";

import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import sliderImgs from "../dummyApi/slider";

function CarouselSlider(): JSX.Element {
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-4 top-48">
        <button>
          <img
            className="w-8 opacity-50 cursor-pointer"
            alt="arrow-left"
            src="/assets/arrow-left.png"
          ></img>
        </button>
      </div>
    ),
    nextArrow: (
      <div className="mr-4 top-48">
        <button>
          <img
            className="w-8 opacity-50 cursor-pointer"
            alt="arrow-right"
            src="/assets/arrow-right.png"
          ></img>
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
            <div className="relative w-[80%] mx-auto -top-40 text-justify z-10 text-3xl font-bold text-black">
              <p className="w-fit ml-5 px-5 py-1 bg-primary">{each.title}</p>
            </div>
            <p className="relative w-[80%] mx-auto -top-36 z-10 text-white">
              {each.description}
            </p>
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default CarouselSlider;
