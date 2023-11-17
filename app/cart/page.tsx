import CartTable from "../components/cartTable";
import Payments from "../components/payments";
import SquareBanner from "../components/squareBanner";

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
    <div className="w-full h-auto">
      <div className="w-full h-fit flex flex-row justify-center items-center text-3xl font-semibold">
        <img
          className="w-full h-[350px] mt-2 object-cover hover:cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/001/338/096/non_2x/black-friday-sale-banner-free-vector.jpg"
        ></img>
      </div>
      <div className="w-full h-fit mt-6 py-4 flex flex-row justify-center items-center text-3xl font-semibold">
        Your cart (edit p new line)
      </div>
      <div className="w-[90%] max-w-full h-fit mt-6 mx-auto overflow-hidden rounded-xl border-2 border-black">
        <CartTable />
      </div>
      <div className="w-full h-fit bg-primary mt-8 py-4 flex flex-row justify-center items-center text-3xl font-semibold">
        Payment
      </div>
      <div className="w-[90%] h-[530px] mt-4 pb-4 mx-auto flex flex-row justify-center gap-4">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <SquareBanner data={bannerData} />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <Payments />
        </div>
      </div>
    </div>
  );
}
