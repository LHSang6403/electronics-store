"use client";
import { Carousel } from "flowbite-react";
import sliderImgs from "../dummyApi/slider";

function CarouselSlider(): JSX.Element {
  return (
    <div className="h-full w-full">
      <Carousel
        slideInterval={5000}
      >
        {sliderImgs.map((img, index) => (
          <img key={img.title} className="rounded-none" src={img.image} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
