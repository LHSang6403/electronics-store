"use client";

import CarouselSlider from "@components/CarouselSlider";
import Cards from "@components/cards/Cards";
import Banner from "@components/banners/Banner";
import Top2Items from "@/components/product/Top2Items";
import TrendingCategories from "@/components/product/TrendingCategories";
import ProductsContainer from "@/components/product/ProductsContainer";
import IntroHome from "@components/IntroHome";
import { Suspense, useRef } from "react";
import LoadingComponent from "@components/skeletons/LoadingComponent";
import PageHeading from "@components/layouts/PageHeading";
import hover3D from "@lib/hover";
import HorizontalScrollWrapper from "@/components/wrapper/HorizontalScrollWrapper";

export default function Home(): JSX.Element {
  const hover3DRef = useRef<HTMLDivElement>(null);

  const imageHover = hover3D(hover3DRef, {
    x: 50,
    y: -50,
    z: 50,
  });

  return (
    <main
      className="w-full min-h-screen
      px-10 2xl:px-4 sm:px-2 mx-auto bg-[#f5f5f555]
      flex flex-col justify-center gap-8 pb-8"
    >
      <PageHeading name="Home" />
      <section
        ref={hover3DRef}
        className="w-full h-fit flex flex-row sm:flex-col gap-4 xl:gap-1 sm:px-1"
      >
        <div className="w-1/2 sm:w-full h-fit">
          <div
            style={{
              transform: imageHover.transform,
              transition: "all 0.2s ease",
            }}
          >
            <Suspense fallback={<LoadingComponent />}>
              <CarouselSlider />
            </Suspense>
          </div>
        </div>
        <div
          className="w-1/2 h-fit sm:w-full
        flex flex-col justify-center items-center xl:items-start"
        >
          <IntroHome />
        </div>
      </section>
      <section
        className="w-full h-fit sm:h-fit
      ml-16 2xl:-ml-44 xl:-ml-64 lg:px-20 sm:px-0 flex flex-col"
      >
        <HorizontalScrollWrapper direction={600}>
          <h1 className="font-semibold text-[50px] mb-4 sm:text-center">
            Why choose us
          </h1>
          <div className="w-fit h-full sm:px-4">
            <Cards />
          </div>
        </HorizontalScrollWrapper>
      </section>
      <section
        className="w-full h-fit sm:h-fit 
      2xl:ml-44 xl:ml-52 lg:ml-96 sm:ml-64 lg:px-20 sm:px-0 flex flex-col items-end"
      >
        <HorizontalScrollWrapper direction={-600}>
          <h1 className="w-full font-semibold text-[50px] text-left mb-4 sm:text-center">
            Top 2 Selling
          </h1>
          <Top2Items />
        </HorizontalScrollWrapper>
      </section>
      <section
        className="w-full h-auto
      ml-16 2xl:-ml-44 xl:-ml-56 lg:-ml-80 sm:-ml-60
      flex flex-col items-start"
      >
        <HorizontalScrollWrapper direction={600}>
          <h1
            className="font-semibold text-[50px] text-left 
          mr-4 mb-4 sm:text-center"
          >
            Trending Categories
          </h1>
          <TrendingCategories />
        </HorizontalScrollWrapper>
      </section>
      <section
        className="w-fit h-fit sm:h-fit mx-auto
      shadow-lg overflow-hidden"
      >
        <Banner />
      </section>
      <section className="w-full h-auto">
        <ProductsContainer isAllProducts={false} />
      </section>
    </main>
  );
}
