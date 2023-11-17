"user client";

import CarouselSlider from "./components/carouselSlider";
import Cards from "./components/cards";
import Banner from "./components/banner";
import Top2Items from "./components/top2Items";
import TrendingCategories from "./components/trendingCategories";
import ItemsContainer from "./components/itemsContainer";

export default function Home(): ReturnType<React.FC> {
  return (
    <>
      <main className="flex h-auto min-h-screen flex-col items-center justify-start">
        <div className="w-full h-[500px] flex flex-row">
          <div className="w-2/5 h-full pl-2 overflow-hidden flex flex-col justify-center items-center">
            <h1 className="w-[88%] text-2xl font-bold">
              Your go-to destination for top-quality electronic products in
              Vietnam!
            </h1>
            <div className="w-full pl-5 flex flex-row justify-start items-center">
              <button className="w-28 h-8 my-2 bg-primary text-lg">
                Shop now
              </button>
              <hr className="w-[100px] h-[2px] ml-2 bg-primary rounded"></hr>
            </div>
            <div className="w-[84%] mt-1 font-light text-justify">
              At{" "}
              <p className="inline text-sm font-bold text-secondary">
                Electrical Store
              </p>
              , we take pride in being a destination for tech enthusiasts and
              electronic lovers. With a professional and dedicated team, we are
              committed to provide the best shopping experience.
            </div>
          </div>
          <div className="w-3/5 h-full shadow-md">
            <CarouselSlider />
          </div>
        </div>
        <div className="w-full h-[300px] flex flex-col">
          <div className="w-full mt-4 p-2 flex flex-row justify-center items-center text-3xl font-semibold">
            Why choose us
          </div>
          <div className="w-full h-full">
            <Cards />
          </div>
        </div>
        <div className="w-full h-[250px] shadow-lg overflow-hidden my-4">
          <Banner />
        </div>
        <div className="w-full h-[250px] mt-4">
          <Top2Items />
        </div>
        <div className="w-full h-fit my-4 flex flex-col items-center">
          <div className="w-full p-2 flex flex-row justify-center items-center text-3xl font-semibold">
            Trending Categories
          </div>
          <TrendingCategories />
        </div>
        <div className="w-full h-auto my-4">
          <div className="w-[90%] h-[70px] bg-primary mx-auto text-3xl font-semibold border-4 border-b-0 border-black rounded-t-3xl flex flex-row justify-center items-center">
            Electrical Store
          </div>
          <ItemsContainer check={{ isAllProducts: false }} />
        </div>
      </main>
    </>
  );
}
