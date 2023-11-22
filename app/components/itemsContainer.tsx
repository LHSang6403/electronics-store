import Product from "./product";
import products from "../dummyApi/products";
import Combobox from "./comboBox";

interface ProductData {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  sale?: string;
}

interface ItemsContainerProps {
  check: { isAllProducts: boolean };
}

export default function ItemsContainer({
  check: { isAllProducts },
}: ItemsContainerProps): JSX.Element {
  const data: ProductData[] = products;
  const categories: string[] = ["Laptop", "Phone", "Tablet", "Watch", "TV"];
  const top4brands: string[] = ["Apple", "Samsung", "Xiaomi", "Sony", "..."];
  const brandsLines: string[][] = [
    top4brands,
    top4brands,
    top4brands,
    top4brands,
  ];

  const filters: string[] = ["Price", "Brand", "Rating", "Sale", "Functions"];

  return (
    <div className="w-[90%] h-full mx-auto py-5 xl:pb-0 sm:pb-4 xl:pt-3 sm:pt-2 rounded-b-3xl xl:rounded-b-2xl sm:rounded-b-2xl border-2 border-t-0 border-black">
      {isAllProducts && (
        <div
          className="w-fit sm:w-auto h-fit mx-14 xl:mx-5 sm:mx-3 mb-2 -mt-2 xl:-mt-0 
        flex flex-row justify-start items-center gap-2
        sm:grid sm:grid-cols-2"
        >
          {filters.map((filter, index) => (
            <div className="" key={index}>
              <Combobox data={{ title: filter }} />
            </div>
          ))}
        </div>
      )}
      {(() => {
        const sections = [];
        for (let i = 0; i < 4; i++) {
          sections.push(
            <div key={i}>
              <div className="w-auto h-8 mx-14 xl:mx-5 sm:mx-3 flex flex-row justify-between items-center">
                <div className="w-fit h-fit flex flex-row items-center hover:cursor-pointer">
                  <h2 className="w-fit h-fit py-2 text-center text-2xl xl:text-xl">
                    {categories[i]}
                  </h2>
                  {!isAllProducts && (
                    <img
                      className="w-4 h-4 xl:w-3 xl:h-3 ml-1"
                      alt="nav-icon"
                      src="/assets/nav-icon.png"
                    ></img>
                  )}
                </div>
                <div className="flex flex-row sm:hidden">
                  {brandsLines[i].map((brand, index) => (
                    <p
                      className="mx-2 hover:cursor-pointer"
                      key={`brand-${i}-${index}`}
                    >
                      {brand}
                    </p>
                  ))}
                </div>
              </div>
              <hr className="w-auto h-[1px] mx-14 xl:mx-4 sm:mx-3 border-none rounded bg-black"></hr>
              <div>
                {/* {!isAllProducts && (
                  <img
                    className="w-5 h-5 sm:hidden opacity-70 hover:opacity-100 hover:cursor-pointer"
                    alt="left-arrow"
                    src="/assets/black-arrow-left.png"
                  ></img>
                )} */}
                {!isAllProducts ? (
                  <div
                    className="
                  flex flex-row justify-center items-center
                  sm:grid sm:grid-cols-2 sm:place-items-center sm:mx-0"
                  >
                    {data.slice(0, 4).map((prod: ProductData) => (
                      <div className="" key={prod.id}>
                        <Product {...prod} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="grid grid-cols-4 grid-rows-3 bg-blue-100
                  sm:grid-cols-2 sm:grid-rows-6 sm:place-items-center"
                  >
                    {data.slice(0, 12).map((prod: ProductData) => (
                      <div className="w-[94%] bg-red-200" key={prod.id}>
                        <Product {...prod} />
                      </div>
                    ))}
                  </div>
                )}

                {/* {!isAllProducts && (
                  <img
                    className="w-5 h-5 sm:hidden opacity-70 hover:opacity-100 hover:cursor-pointer"
                    alt="right-arrow"
                    src="/assets/black-arrow-right.png"
                  ></img>
                )} */}
              </div>
            </div>
          );
        }
        return sections;
      })()}
      {!isAllProducts && (
        <div className="w-full h-8 flex justify-center mt-2 xl:mb-4 sm:mb-0">
          <button className="w-28 h-full rounded-lg shadow-lg bg-[#EEEEEE]">
            Show all
          </button>
        </div>
      )}
    </div>
  );
}
