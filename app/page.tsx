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
        <div className="w-full h-[500px] sm:h-fit flex flex-row sm:flex-col xl:gap-4 sm:gap-4">
          <div className="w-2/5 sm:w-full h-full pl-2 xl:pl-0 sm:pl-0 overflow-hidden flex flex-col justify-center items-center xl:items-start">
            <h1 className="w-[88%] xl:w-full sm:px-4 text-2xl xl:text-xl sm:text-xl font-bold">
              Your go-to destination for top-quality electronic products in
              Vietnam!
            </h1>
            <div className="w-[88%] xl:w-full sm:w-full my-2 xl:px-0 sm:px-4 flex flex-row justify-between items-center">
              <button className="w-28 h-8 my-2 bg-primary text-lg">
                Shop now
              </button>
              <hr className="w-[100px] h-[2px] ml-2 bg-primary rounded"></hr>
            </div>
            <div className="w-[88%] xl:w-full sm:px-4 font-light text-justify">
              At&nbsp;
              <p className="inline text-sm font-bold text-secondary">
                Electrical Store
              </p>
              , we take pride in being a destination for tech enthusiasts and
              electronic lovers. With a professional and dedicated team, we are
              committed to provide the best shopping experience.
            </div>
          </div>
          <div className="w-3/5 h-full xl:h-[500px] sm:w-full sm:h-[500px] shadow-md">
            <CarouselSlider />
          </div>
        </div>
        <div className="w-full h-[300px] lg:h-[520px] lg:px-20 sm:px-0 sm:h-fit mt-8 flex flex-col">
          <div className="w-full p-2 mb-8 flex flex-row justify-center items-center text-3xl font-semibold">
            Why choose us
          </div>
          <div className="w-full h-full sm:px-4">
            <Cards />
          </div>
        </div>
        <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden mt-8">
          <Banner />
        </div>
        <div className="w-full h-[250px] sm:h-fit mt-8">
          <Top2Items />
        </div>
        <div className="w-full h-auto mt-8 flex flex-col items-center">
          <div className="w-full mb-8 p-2 flex flex-row justify-center items-center text-3xl font-semibold">
            Trending Categories
          </div>
          <TrendingCategories />
        </div>
        <div className="w-full h-auto mt-8">
          {/* <div className="w-[90%] h-[70px] bg-primary mx-auto text-3xl font-semibold border-2 border-b-0 border-black rounded-t-3xl flex flex-row justify-center items-center">
            Electrical Store
          </div> */}
          <ItemsContainer check={{ isAllProducts: false }} />
        </div>
      </main>
    </>
  );
}
