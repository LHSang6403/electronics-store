import { create } from "zustand";

import { type ProductData } from "@app/(main)/product/interface";

export interface CartItem extends ProductData {
  quantity: number;
}

function calculateTotalPrice(cartList: CartItem[]): number {
  let total = 0;
  cartList.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}

export const useCartStore = create((set) => ({
  cartList: [] as CartItem[],
  totalQuantity: 0,
  totalPrice: 0,
  addProd: (product: ProductData) => {
    set((state: any) => {
      // check if product is already in cart -> increase quantity
      const existingProduct = state.cartList.find(
        (item: CartItem) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        return {
          cartList: [...state.cartList],
          totalQuantity: state.totalQuantity + 1,
          totalPrice: calculateTotalPrice(state.cartList),
        };
      }

      // add new product to cart
      const newProduct: CartItem = {
        ...product,
        quantity: 1,
      };
      // state.cartList.push(newProduct);

      return {
        cartList: [...state.cartList, newProduct],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: calculateTotalPrice(state.cartList),
      };
    });
  },
  removeProd: (productId: string) => {
    set((state: any) => {
      // remove product from cart
      state.cartList = state.cartList.filter(
        (item: CartItem) => item.id !== productId
      );

      return {
        cartList: [...state.cartList],
        totalQuantity: state.totalQuantity - 1,
        totalPrice: calculateTotalPrice(state.cartList),
      };
    });
  },
  increaseQuantity: (productId: string) => {
    set((state: any) => {
      const updatedCartList = state.cartList.map((item: CartItem) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );

      return {
        cartList: updatedCartList,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: calculateTotalPrice(updatedCartList),
      };
    });
  },
  decreaseQuantity: (productId: string) => {
    set((state: any) => {
      const updatedCartList = state.cartList.map((item: CartItem) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      // Remove item from cart if quantity is 0
      const filterUpdatedCartList = updatedCartList.filter(
        (item: CartItem) => item.quantity > 0
      );

      return {
        cartList: filterUpdatedCartList,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: calculateTotalPrice(filterUpdatedCartList),
      };
    });
  },
  removeAllProds: () => {
    set(() => {
      return {
        cartList: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    });
  },
}));
