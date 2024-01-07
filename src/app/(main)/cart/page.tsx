"use client";

import CartTable from "@app/(main)/cart/CartTable";
import Payments from "@/app/(main)/cart/Payments";
import SquareBanner from "@components/banners/SquareBanner";
import PageHeading from "@components/layouts/PageHeading";
import { useCartStore } from "@zustand/useCartStore";

import { type SquareBannerProps } from "@app/(main)/about/interface";

const bannerData: SquareBannerProps = {
  image:
    "https://img.freepik.com/premium-vector/mega-sale-banner-white-black-colors-free-vector_363897-72.jpg?w=2000",
  title: "Explore our sale now",
  description: "",
};

export default function Cart(): JSX.Element {
  const { totalPrice } = useCartStore() as {
    totalPrice: number;
  };

  return (
    <>
      <PageHeading name="Products" />
      {totalPrice > 0 ? <></> : <div className="h-[10vh]"></div>}
      <div className="w-auto mx-6 xl:mx-0 sm:mx-4 flex flex-row xl:flex-col justify-center gap-8">
        <div className="max-w-[1200px] h-fit overflow-hidden rounded-xl border-2 border-black">
          <CartTable />
        </div>
        {totalPrice > 0 ? (
          <div className="flex flex-col xl:flex-row-reverse sm:flex-col gap-4 justify-center items-center">
            <Payments />
            <SquareBanner squareBannerProps={bannerData} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
