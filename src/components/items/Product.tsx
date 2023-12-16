import Link from "next/link";
import formatCurrencyWithCommas from "@/utils/formatCurrency";
import Image from "next/image";

import { type ProductData } from "@app/interface";

export default function Product(props: ProductData): JSX.Element {
  const data: ProductData = props;

  return (
    <div className="w-36 h-48 xl:w-[156px] sm:w-32 sm:h-48 mx-2 xl:mx-auto my-2 xl:my-0 rounded-xl shadow-lg flex flex-col items-center justify-start bg-[#EEEEEE] hover:cursor-pointer">
      <div className="p-1 pb-0">
        <Link href={`/product/${data.id}`}>
          <div className="w-full object-cover rounded-[12px] shadow-lg bg-black">
            <Image
              className="mx-auto"
              src={data.image}
              alt={`Product ${data.id}`}
              width={512}
              height={512}
            />
          </div>
        </Link>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="w-full px-2 text-base xl:text-base sm:text-base overflow-hidden whitespace-nowrap overflow-ellipsis">
          {data.name}
        </h1>
        <div className="w-full px-2 flex flex-row justify-between flex-start">
          <div className="text-sm flex flex-row justify-center items-center">
            <p className="text-sm">{data.rating}</p>
            <div className="w-3 h-3 ml-0.5">
              <Image
                src="/assets/stars/star.png"
                alt="Star"
                width={30}
                height={30}
              />
            </div>
          </div>
          <h2 className="text-sm text-primary">
            {formatCurrencyWithCommas(data.price)}.000
          </h2>
        </div>
      </div>
    </div>
  );
}
