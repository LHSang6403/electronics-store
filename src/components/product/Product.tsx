import Link from "next/link";
import formatCurrencyWithCommas from "@/utils/formatCurrency";
import Image from "next/image";

import { type ProductData } from "@app/(main)/product/interface";

export default function Product(props: ProductData): JSX.Element {
  const data: ProductData = props;

  return (
    <div className="w-36 h-fit xl:w-32 lg:w-28 sm:w-36 ssm:w-32 mx-2 sm:mx-0 xl:mx-auto my-2 xl:my-0 rounded-xl shadow-lg flex flex-col items-center justify-start bg-[#EEEEEE] hover:cursor-pointer">
      <div className="p-1 pb-0">
        <Link href={`/product/${data.id}`}>
          <div className="w-full rounded-[12px] shadow-lg bg-black overflow-hidden">
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
      <div className="w-full h-full flex flex-col justify-start items-center my-1.5">
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
