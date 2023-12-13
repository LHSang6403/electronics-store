"use client";

import { useCartStore } from "@zustand/useCartStore";
import Image from "next/image";

import {
  type QuantityButtonProps,
  type CartItem,
} from "@/app/(main)/cart/interface";

function getQuantityFromId(cartList: CartItem[], id: string): string {
  const item = cartList.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;
  return quantity.toString();
}

export default function QuantityButton({
  id,
}: QuantityButtonProps): JSX.Element {
  const { cartList, increaseQuantity, decreaseQuantity } = useCartStore() as {
    cartList: CartItem[];
    increaseQuantity: any;
    decreaseQuantity: any;
  };

  return (
    <div className="flex flex-row justify-end items-center gap-2 sm:gap-3">
      <div
        className="hover:cursor-pointer"
        onClick={() => decreaseQuantity(id)}
      >
        <Image
          src="/assets/icons/minus-icon.png"
          alt="Minus"
          width={18}
          height={18}
        />
      </div>
      <p className="text-lg">{getQuantityFromId(cartList, id)}</p>
      <div
        className="hover:cursor-pointer"
        onClick={() => increaseQuantity(id)}
      >
        <Image
          src="/assets/icons/plus-icon.png"
          alt="Plus"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
}
