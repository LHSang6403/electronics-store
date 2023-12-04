"use client";

import { useCartStore } from "@zustand/useCartStore";

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
        <img
          className="w-3.5"
          alt="minus-icon"
          src="/assets/icons/minus-icon.png"
        ></img>
      </div>
      <p className="text-lg">{getQuantityFromId(cartList, id)}</p>
      <div
        className="hover:cursor-pointer"
        onClick={() => increaseQuantity(id)}
      >
        <img
          className="w-3.5"
          alt="plus-icon"
          src="/assets/icons/plus-icon.png"
        ></img>
      </div>
    </div>
  );
}
