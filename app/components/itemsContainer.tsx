import Product from "./product";
import products from "../dummyApi/product";

interface ProductData {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
}

export default function ItemsContainer(): JSX.Element {
  const data: ProductData[] = products.slice(0, 4);
  const categories: string[] = ["Laptop", "Phone", "Tablet", "Watch", "TV"];
  const top4brands: string[] = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Huawei",
    "Sony",
    "...",
  ];
  const brandsLines: string[][] = [
    top4brands,
    top4brands,
    top4brands,
    top4brands,
  ];

  return (
    <div className="w-[90%] h-full mx-auto pb-5 rounded-b-3xl bg-primary">
      {(() => {
        const sections = [];
        for (let i = 0; i < 4; i++) {
          sections.push(
            <div className="mb-2" key={i}>
              <div className="w-auto h-8 mx-24 flex flex-row justify-between items-center">
                <div className="w-fit h-fit flex flex-row items-center">
                  <h2 className="w-fit h-fit py-2 text-center text-2xl">
                    {categories[i]}
                  </h2>
                  <img
                    className="w-4 h-4 ml-1"
                    alt="nav-icon"
                    src="/assets/nav-icon.png"
                  ></img>
                </div>
                <div className="flex flex-row">
                  {brandsLines[i].map((brand, index) => (
                    <p className="mx-2" key={`brand-${i}-${index}`}>
                      {brand}
                    </p>
                  ))}
                </div>
              </div>
              <hr className="w-auto h-[1px] mx-24 border-none rounded bg-black"></hr>
              <div className="w-full h-full flex flex-row justify-center items-center">
                <img
                  className="w-5 h-5 opacity-70 hover:opacity-100 hover:cursor-pointer"
                  alt="left-arrow"
                  src="/assets/black-arrow-left.png"
                ></img>
                {data.map((prod: ProductData) => (
                  <div key={prod.id}>
                    <Product {...prod} />
                  </div>
                ))}
                <img
                  className="w-5 h-5 opacity-70 hover:opacity-100 hover:cursor-pointer"
                  alt="right-arrow"
                  src="/assets/black-arrow-right.png"
                ></img>
              </div>
            </div>
          );
        }
        return sections;
      })()}
      <div className="w-full h-8 flex flex-row justify-center">
        <button className="w-28 h-8 rounded-lg shadow-xl bg-[#EEEEEE]">
          Show all
        </button>
      </div>
    </div>
  );
}
