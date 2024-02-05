"use client";

import RatingStars from "@components/buttons/RatingStars";
import Link from "next/link";
import { useRouter } from "next/navigation";
import formatCurrencyWithCommas from "@/utils/formatCurrency";
import { useCartStore } from "@zustand/useCartStore";
import Image from "next/image";
import { type ProductData } from "@/app/(main)/product/interface";
import { toast } from "sonner";

export default async function ProductInfo(data: {
  productData: ProductData;
}): Promise<JSX.Element> {
  const router = useRouter();
  const { addProd } = useCartStore() as { addProd: any };

  const handleOnBuyNow = () => {
    console.log("buy now");
    addProd(data.productData);
    router.push("/cart");
  };

  return (
    <div className="w-full max-w-[1300px] px-10 xl:px-0 h-[560px] sm:h-[800px] flex flex-row sm:flex-col justify-center items-center gap-2">
      <div className="w-1/2 sm:w-full h-full sm:overflow-hidden">
        <div className="w-[40%] h-full flex items-center relative rounded-2xl bg-black">
          <ul className="w-fit h-fit py-1 border-[1px] ml-8 xl:ml-4 rounded-lg border-white flex flex-col gap-1 px-2 justify-center items-center">
            <li className="w-12 lg:w-10 h-12 rounded overflow-hidden">
              <Image
                src={data.productData.image}
                alt="Product selector"
                width={512}
                height={512}
              />
            </li>
            <li className="w-12 lg:w-10 h-12 rounded overflow-hidden">
              <Image
                src={data.productData.image}
                alt="Product selector"
                width={512}
                height={512}
              />
            </li>
            <li className="w-12 lg:w-10 h-12 rounded overflow-hidden">
              <Image
                src={data.productData.image}
                alt="Product selector"
                width={512}
                height={512}
              />
            </li>
            <li className="w-12 lg:w-10 h-12 rounded overflow-hidden">
              <Image
                src={data.productData.image}
                alt="Product selector"
                width={512}
                height={512}
              />
            </li>
          </ul>
          <div className="w-full h-fit absolute scale-125 xl:scale-110 left-36 xl:left-28 lg:left-24 sm:left-24 top-[22%] lg:top-[25%] sm:top-[11%] ssm:top-[14%]">
            <div className="w-[140%] lg:w-[165%] sm:w-[140%] h-fit object-cover rounded-xl overflow-hidden [transition:transform_0.5s_ease] group-hover:scale-[1.01]">
              <Image
                src={data.productData.image}
                alt="sale-square-banner"
                layout="responsive"
                width={512}
                height={512}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-full h-[500px] sm:h-fit px-10 xl:px-4 sm:px-0 flex flex-col justify-between">
        <div className="w-full h-16 pt-3 mb-1 sm:mb-0 sm:p-0 flex flex-row justify-center items-center">
          <Link
            href="/"
            className="w-fit h-fit px-2 text-[14px] shadow-lg rounded border-[1px] border-black font-light hover:bg-black hover:text-white"
          >
            Go back
          </Link>
        </div>
        <div className="w-full h-full flex flex-col lg:ml-2 sm:m-0">
          <h1 className="text-2xl sm:ml-4 font-semibold break-words line-clamp-3 leading-8">
            {data.productData.name}
          </h1>
          {data.productData.sale && (
            <div className="w-fit max-w-[400px] h-fit sm:ml-4 font-semibold px-2 py-1 text-primary rounded-lg shadow-lg bg-black">
              {data.productData.sale}
            </div>
          )}
          <div className="text-lg sm:ml-4 text-primary mt-4 -mb-2">
            <RatingStars rating={data.productData.rating} />
          </div>
          <h2 className="text-2xl sm:ml-4 font-semibold text-primary">
            {formatCurrencyWithCommas(data.productData.price)}.000 VND
          </h2>
          <div className="bg-black h-44 sm:h-fit text-white rounded-2xl shadow-lg p-4 mt-2">
            <h4 className="text-xl">{data.productData.category}</h4>
            <p className="text-sm text-justify break-words line-clamp-3 leading-5">
              A short description hehe.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-6 pt-6 sm:pt-10">
            <button
              className="w-28 h-10 text-xl bg-primary shadow-lg font-semibold"
              onClick={() => {
                handleOnBuyNow();
              }}
            >
              Buy now
            </button>
            <button
              className="w-28 h-10 text-xl bg-primary shadow-lg font-semibold"
              onClick={() => {
                addProd(data.productData);
                toast.success("Add to cart successfully.");
              }}
            >
              Add cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
