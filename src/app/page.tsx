import CarouselSlider from "@/components/carouselSlider";
import Cards from "@/components/cards/cards";
import Banner from "@/components/banners/banner";
import Top2Items from "@/components/items/top2Items";
import TrendingCategories from "@/components/items/trendingCategories";
import ItemsContainer from "@/components/items/itemsContainer";
import IntroHome from "@/components/introHome";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Home(): JSX.Element {
  return (
    <>
      <main
        className="w-[1050px] xl:w-full lg:w-full sm:w-full xl:px-6 lg:px-6 sm:px-0 mx-auto bg-[#f5f5f555]
      flex flex-col gap-8 pb-8"
      >
        <div className="w-full h-[500px] sm:h-fit flex flex-row sm:flex-col xl:gap-4 sm:gap-4">
          <div className="w-2/5 sm:w-full h-full pl-2 xl:pl-0 sm:pl-0 overflow-hidden flex flex-col justify-center items-center xl:items-start">
            <IntroHome />
          </div>
          <div className="w-3/5 h-full xl:h-[500px] sm:w-full sm:h-[500px] shadow-md">
            <Suspense fallback={<Loading />}>
              <CarouselSlider />
            </Suspense>
          </div>
        </div>
        <div className="w-full h-[300px] lg:h-[520px] lg:px-20 sm:px-0 sm:h-fit flex flex-col">
          <div className="w-full p-2 mb-8 flex flex-row justify-center items-center text-3xl font-semibold">
            Why choose us
          </div>
          <div className="w-full h-full sm:px-4">
            <Cards />
          </div>
        </div>
        <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden">
          <Banner />
        </div>
        <div className="w-full h-[250px] sm:h-fit">
          <Top2Items />
        </div>
        <div className="w-full h-auto flex flex-col items-center">
          <div className="w-full p-2 mb-8 flex flex-row justify-center items-center text-3xl font-semibold">
            Trending Categories
          </div>
          <TrendingCategories />
        </div>
        <div className="w-full h-auto">
          <ItemsContainer check={{ isAllProducts: false }} />
        </div>
      </main>
    </>
  );
}
