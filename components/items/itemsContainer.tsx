import Link from "next/link";
import Product from "./Product";
import Combobox from "../buttons/ComboBox";
import { readProducts } from "@app/actions/productActions";

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

export default async function ItemsContainer({
  check: { isAllProducts },
}: ItemsContainerProps): Promise<JSX.Element> {
  const { data: products } = await readProducts({
    check: { isAllProducts },
  });

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
    <div className="w-fit h-full overflow-hidden mt-4 mx-auto rounded-3xl xl:rounded-2xl sm:rounded-2xl border-2 border-black">
      <div className="w-full h-[70px] mb-4 bg-primary text-3xl font-semibold flex justify-center items-center">
        Electrical Store
      </div>
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
            <div className="w-fit pb-3" key={i}>
              <div className="w-auto h-8 mt-2 mx-14 xl:mx-5 sm:mx-5 flex flex-row justify-between items-center">
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
              <hr className="w-auto h-[1px] mx-14 xl:mx-4 sm:mx-5 border-none rounded bg-black"></hr>
              <div className="px-2">
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
                  flex flex-row justify-center items-center gap-2 p-2
                  sm:grid sm:grid-cols-2 sm:place-items-center"
                  >
                    {products?.slice(0, 4).map((prod: ProductData) => (
                      <div key={prod.id}>
                        <Product {...prod} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="grid grid-cols-4 grid-rows-3 gap-2 p-2
                  sm:grid-cols-2 sm:grid-rows-6 sm:place-items-center"
                  >
                    {products?.slice(0, 12).map((prod: ProductData) => (
                      <div key={prod.id}>
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
        <div className="w-full h-fit flex justify-center mb-5">
          <Link
            href="/products"
            className="w-28 h-8 flex justify-center items-center rounded-lg shadow-lg bg-[#EEEEEE]"
          >
            Show all
          </Link>
        </div>
      )}
    </div>
  );
}