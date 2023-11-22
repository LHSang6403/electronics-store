import ItemsContainer from "../components/itemsContainer";
import Banner from "../components/banner";
import Top2Items from "../components/top2Items";

export default function AllProducts(): JSX.Element {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden">
        <Banner />
      </div>
      <div className="w-full h-[250px] sm:h-fit mt-8">
        <Top2Items />
      </div>
      {/* <div className="w-[90%] h-[70px] mt-8 bg-primary mx-auto text-3xl font-semibold border-2 border-b-0 border-black rounded-t-3xl xl:rounded-t-2xl sm:rounded-t-2xl flex flex-row justify-center items-center">
        Electrical Store
      </div> */}
      <div className="w-fit h-fit my-8">
        <ItemsContainer check={{ isAllProducts: true }} />
      </div>
    </div>
  );
}
