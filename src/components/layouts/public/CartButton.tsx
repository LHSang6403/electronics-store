"use client";

import { useSideBar } from "@/zustand/useSideBar";
import Image from "next/image";

const CartButton = () => {
  const { toggleSideBar } = useSideBar() as { toggleSideBar: () => void };

  return (
    <button
      className="w-fit mt-0.5 mx-2 block"
      onClick={() => {
        toggleSideBar();
      }}
    >
      <Image
        src="/assets/icons/cart-icon.png"
        alt="Cart"
        width={32}
        height={32}
      />
    </button>
  );
};

export default CartButton;
