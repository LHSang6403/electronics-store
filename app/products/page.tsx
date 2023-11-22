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
      <div className="w-full h-fit my-8">
        <ItemsContainer check={{ isAllProducts: true }} />
      </div>
    </div>
  );
}
