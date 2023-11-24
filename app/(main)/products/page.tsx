import ItemsContainer from "@components/items/itemsContainer";
import Banner from "@components/banners/banner";
import Top2Items from "@components/items/top2Items";

export default function AllProducts(): JSX.Element {
  return (
    <div className="w-full h-fit flex flex-col gap-8 pb-8">
      <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden">
        <Banner />
      </div>
      <div className="w-full h-[250px] sm:h-fit">
        <Top2Items />
      </div>
      <div className="w-full h-fit">
        <ItemsContainer check={{ isAllProducts: true }} />
      </div>
    </div>
  );
}
