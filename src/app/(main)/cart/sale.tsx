import { type SaleProps } from "@/app/(main)/cart/interface";
import Image from "next/image";

export default function Sale({ data }: SaleProps): JSX.Element {
  return (
    <div className="w-fit h-fit flex flex-row mt-1 text-base sm:text-sm text-primary">
      <div className="w-5 h-5 relative -top-0.5 left-2">
        <Image
          alt="Sale Tag"
          src="/assets/icons/sale-tag.png"
          width={30}
          height={30}
        />
      </div>
      <p
        className="sm:w-fit sm:max-w-[130px]
       overflow-hidden whitespace-nowrap overflow-ellipsis
       -ml-1 border-[1px] border-primary rounded-lg px-2 sm:px-1"
      >
        {data}
      </p>
    </div>
  );
}
