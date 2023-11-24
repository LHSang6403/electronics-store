import Link from "next/link";
import formatCurrencyWithCommas from "@utils/formatCurrency";

interface ProductData {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
}

export default function Product(props: ProductData): JSX.Element {
  const data: ProductData = props;

  return (
    <div className="w-36 h-48 xl:w-[156px] sm:w-32 sm:h-48 mx-2 xl:mx-auto rounded-xl shadow-lg flex flex-col items-center justify-start bg-[#EEEEEE] hover:cursor-pointer">
      <div className="p-1 pb-0">
        <Link href={`/product/${data.id}`}>
          <img
            className="w-36 h-32 object-cover rounded-[12px] shadow-lg bg-black"
            alt={`img-${data.id}`}
            src={data.image}
          ></img>
        </Link>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="w-full px-2 text-lg xl:text-base sm:text-base overflow-hidden whitespace-nowrap overflow-ellipsis">
          {data.name}
        </h1>
        <div className="w-full px-2 flex flex-row justify-between flex-start">
          <div className="text-sm flex flex-row justify-center items-center">
            <p className="text-sm">{data.rating}</p>
            <img
              className="w-3 h-3 ml-0.5"
              alt="star"
              src="/assets/star.png"
            ></img>
          </div>
          <h2 className="text-sm text-primary">
            {formatCurrencyWithCommas(data.price)}
          </h2>
        </div>
      </div>
    </div>
  );
}
