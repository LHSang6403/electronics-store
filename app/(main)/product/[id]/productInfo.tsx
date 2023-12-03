"use client";

import RatingStars from "@components/buttons/RatingStars";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProd } from "@redux/actions/cart";

import { type ProductInfoProps } from "@app/(main)/product/[id]/interface";

export default async function ProductInfo({
  data: { squareBannerData, productData, categoryName },
}: ProductInfoProps): Promise<JSX.Element> {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOnBuyNow = () => {
    console.log("buy now");
    dispatch(addProd(productData));
    router.push("/cart");
  };

  return (
    <div className="w-full h-auto flex flex-row sm:flex-col justify-center items-center">
      <div className="w-[40%] sm:w-full h-[500px] sm:overflow-hidden">
        <div className="w-[70%] h-[94%] my-[3%] pt-[calc((470px_-_250px)_/_2)] rounded-r-2xl bg-black">
          <ul className="w-fit h-[70%] border-[1px] ml-8 xl:ml-4 rounded-lg border-white flex flex-col justify-center items-center">
            <li>
              <img
                className="w-12 h-12 mr-1"
                src={squareBannerData.image}
              ></img>
            </li>
            <li>
              <img
                className="w-12 h-12 mr-1"
                src={squareBannerData.image}
              ></img>
            </li>
            <li>
              <img
                className="w-12 h-12 mr-1"
                src={squareBannerData.image}
              ></img>
            </li>
            <li>
              <img
                className="w-12 h-12 mr-1"
                src={squareBannerData.image}
              ></img>
            </li>
          </ul>
          <div className="w-[130%] h-full relative scale-125 xl:scale-110 left-16 sm:left-9 -top-[86%]">
            <img
              className="w-full h-full object-cover rounded-3xl [transition:transform_0.5s_ease] group-hover:scale-[1.01]"
              src={squareBannerData.image}
              alt="sale-square-banner"
            />
          </div>
        </div>
      </div>
      <div className="w-[60%] sm:w-full h-[500px] sm:h-fit px-10 sm:px-4 flex flex-col justify-between">
        <div className="w-full h-16 pt-3 mb-1 sm:p-0 flex flex-row justify-center items-center">
          <Link
            href="/"
            className="w-fit h-fit px-2 text-[14px] shadow-lg rounded border-[1px] border-black font-light hover:bg-black hover:text-white"
          >
            Go back
          </Link>
        </div>
        <div className="w-full h-full xl:ml-8 sm:m-0 flex flex-col">
          <h2 className="text-2xl font-semibold break-words line-clamp-3 leading-8">
            {productData.name}
          </h2>
          {productData.sale && (
            <div className="w-fit max-w-[400px] h-fit font-semibold px-2 py-1 text-primary rounded-lg shadow-lg bg-black">
              {productData.sale}
            </div>
          )}
          <h3 className="text-lg text-primary mt-4 -mb-2">
            <RatingStars rating={productData.rating} />
          </h3>
          <h3 className="text-2xl font-semibold text-primary">
            {productData.price}.000 VND
          </h3>
          <div className="bg-black h-44 text-white rounded-2xl shadow-lg p-4 mt-2">
            <h4 className="text-xl">{categoryName}</h4>
            <p className="text-sm text-justify break-words line-clamp-3 leading-5">
              {productData.description}
            </p>
          </div>
          <div className="flex flex-row justify-start gap-6 pt-6">
            <button
              className="w-28 h-10 ml-10 sm:mx-auto text-xl bg-primary shadow-lg font-semibold"
              onClick={() => {
                handleOnBuyNow();
              }}
            >
              Buy now
            </button>
            <button
              className="w-28 h-10 sm:mx-auto text-xl bg-primary shadow-lg font-semibold"
              onClick={() => dispatch(addProd(productData))}
            >
              Add cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}