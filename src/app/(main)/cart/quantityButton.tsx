"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increaseQuantity, decreaseQuantity } from "@/redux/actions/cart";

import {
  type QuantityButtonProps,
  type CartItem,
} from "@/app/(main)/cart/interface";

function getQuantityFromId(id: string) {
  const data: CartItem[] = useAppSelector(
    (state) => state.cartReducer.cartList
  );
  const item = data.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;
  return quantity;
}

export default function QuantityButton({
  id,
}: QuantityButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row justify-end items-center gap-2 sm:gap-3">
      <div
        className="hover:cursor-pointer"
        onClick={() => dispatch(decreaseQuantity(id))}
      >
        <img
          className="w-3.5"
          alt="minus-icon"
          src="/assets/icons/minus-icon.png"
        ></img>
      </div>
      <p className="text-lg">{getQuantityFromId(id)}</p>
      <div
        className="hover:cursor-pointer"
        onClick={() => dispatch(increaseQuantity(id))}
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
