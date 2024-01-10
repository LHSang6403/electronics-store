"use client";

import Image from "next/image";
import Product from "@components/product/Product";
import { readProducts } from "@app/_actions/productActions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import type { ProductData } from "@app/(main)/product/interface";

const ProductSections = ({
  isAllProducts,
  categories,
  brandsLines,
}: {
  isAllProducts: boolean;
  categories: string[];
  brandsLines: string[][];
}) => {
  let limit = 0;

  if (!isAllProducts) {
    limit = 20;
  } else {
    limit = 20;
  }

  const {
    data,
    isSuccess,
    error,
  }: { data: any; isLoading: boolean; isSuccess: boolean; error: any } =
    useQuery({
      queryKey: [`${limit} products`],
      queryFn: async () => await readProducts({ limit }),
    });

  if (error) {
    throw new Error(error.message);
  }

  const products = data?.data;

  return (
    <>
      {(() => {
        const sections = [];
        for (let i = 0; i < 4; i++) {
          sections.push(
            <div className="w-fit sm:w-full mx-auto pb-3" key={i}>
              <div className="w-auto h-8 mt-2 mx-14 xl:mx-5 sm:mx-5 flex flex-row justify-between items-center">
                <div className="w-fit h-fit flex flex-row items-center hover:cursor-pointer">
                  <h2 className="w-fit h-fit py-2 text-center text-2xl xl:text-xl">
                    {categories[i]}
                  </h2>
                  {!isAllProducts && (
                    <div className="w-4 h-4 block xl:w-3 xl:h-3 ml-1">
                      <Image
                        src="/assets/icons/nav-icon.png"
                        alt="Navigation Icon"
                        width={512}
                        height={512}
                      />
                    </div>
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
              {!isAllProducts ? (
                <div
                  className="
                  flex flex-row justify-center items-center gap-4 py-2
                  sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-2"
                >
                  {isSuccess &&
                    products
                      ?.slice(0, 4)
                      .map((prod: ProductData) => (
                        <Product {...prod} key={prod.id} />
                      ))}
                </div>
              ) : (
                <div
                  className="grid grid-cols-4 grid-rows-3 gap-2 p-2
                  sm:grid-cols-2 sm:grid-rows-6 sm:place-items-center"
                >
                  {isSuccess &&
                    products
                      ?.slice(0, 12)
                      .map((prod: ProductData) => (
                        <Product {...prod} key={prod.id} />
                      ))}
                </div>
              )}
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
    </>
  );
};

export default ProductSections;
