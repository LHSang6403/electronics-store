import ItemsContainer from "@/components/items/ItemsContainer";
import Banner from "@/components/banners/Banner";
import Top2Items from "@/components/items/Top2Items";
import { waiting } from "@/utils/waiting";

export default async function AllProducts(): Promise<JSX.Element> {
  await waiting(1000);
  return (
    <>
      <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden">
        <Banner />
      </div>
      <div className="w-full h-[250px] sm:h-fit">
        <Top2Items />
      </div>
      <div className="w-full h-fit">
        <ItemsContainer check={{ isAllProducts: true }} />
      </div>
    </>
  );
}
