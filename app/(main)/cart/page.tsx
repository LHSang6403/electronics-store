import CartTable from "@app/(main)/cart/cartTable";
import Payments from "@components/payments";
import SquareBanner from "@components/banners/squareBanner";
import Banner from "@components/banners/banner";

interface SquareBannerProps {
  image: string;
  title: string;
  description: string;
}

const bannerData: SquareBannerProps = {
  image:
    "https://img.freepik.com/premium-vector/mega-sale-banner-white-black-colors-free-vector_363897-72.jpg?w=2000",
  title: "Explore our sale now",
  description: "",
};

export default function Cart(): JSX.Element {
  return (
    <div className="w-full h-auto flex flex-col gap-8 pb-8">
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
      <div className="w-[90%] h-[600px] sm:h-fit pb-8 mx-auto flex flex-row sm:flex-col-reverse justify-center gap-4">
        <div className="w-1/2 sm:w-full h-full flex flex-col justify-center items-center">
          <SquareBanner data={bannerData} />
        </div>
        <div className="w-1/2 sm:w-full h-full flex flex-col justify-center items-center">
          <Payments />
        </div>
      </div>
    </div>
  );
}
