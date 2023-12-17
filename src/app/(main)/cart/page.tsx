import CartTable from "@app/(main)/cart/CartTable";
import Payments from "@/app/(main)/cart/Payments";
import Banner from "@components/banners/Banner";
import SquareBanner from "@components/banners/SquareBanner";
import { waiting } from "@/lib/waiting";

import { type SquareBannerProps } from "@app/(main)/about/interface";

const bannerData: SquareBannerProps = {
  image:
    "https://img.freepik.com/premium-vector/mega-sale-banner-white-black-colors-free-vector_363897-72.jpg?w=2000",
  title: "Explore our sale now",
  description: "",
};

export default async function Cart(): Promise<JSX.Element> {
  await waiting(200);
  return (
    <>
      <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden">
        <Banner />
      </div>
      <div className="w-full h-fit py-4 flex flex-row justify-center items-center text-3xl font-semibold">
        Your cart
      </div>
      <div className="w-[90%] max-w-full h-fit mx-auto overflow-hidden rounded-xl border-2 border-black">
        <CartTable />
      </div>
      <div className="w-full h-fit bg-primary py-4 flex flex-row justify-center items-center text-3xl font-semibold">
        Payment
      </div>
      <div className="w-[90%] h-fit mx-auto flex flex-row sm:flex-col-reverse justify-center items-center gap-4">
        <div className="w-1/2 sm:w-full h-full flex flex-col justify-center items-center">
          <SquareBanner squareBannerProps={bannerData} />
        </div>
        <div className="w-1/2 sm:w-full h-full flex flex-col justify-center items-center">
          <Payments />
        </div>
      </div>
    </>
  );
}
