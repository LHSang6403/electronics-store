import { createSlice } from "@reduxjs/toolkit";

import { type ProductData } from "@app/interface";

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

const initialState = {
  cartList: [] as CartItem[],
  totalQuantity: 0 as number,
  totalPrice: 0 as number,
};

const cartActions = createSlice({
  name: "cartActions",
  initialState,
  reducers: {
    addProd: (state, action) => {
      // check if product is already in cart -> increase quantity
      for (const [index, item] of state.cartList.entries()) {
        if (item.id === action.payload.id) {
          state.cartList[index].quantity++;
          return;
        }
      }

      // add new product to cart
      const temp: CartItem = {
        ...action.payload,
        quantity: 1,
      };
      state.cartList.push(temp);

      state.totalQuantity++;
      state.totalPrice = calculateTotalPrice(state.cartList);
    },
    removeProd: (state, action) => {
      // remove product from cart
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );

      state.totalQuantity--;
      state.totalPrice = calculateTotalPrice(state.cartList);
    },
    increaseQuantity: (state, action) => {
      if (state.totalQuantity > 0) {
        state.cartList.forEach((item, index) => {
          if (item.id === action.payload) {
            state.cartList[index].quantity++;
          }
        });
        state.totalQuantity++;
        state.totalPrice = calculateTotalPrice(state.cartList);
      }
    },
    decreaseQuantity: (state, action) => {
      if (state.totalQuantity > 0) {
        state.cartList.forEach((item, index) => {
          if (item.id === action.payload) {
            state.cartList[index].quantity--;
            // remove product from cart if quantity is 0
            if (state.cartList[index].quantity === 0) {
              state.cartList = state.cartList.filter(
                (item) => item.id !== action.payload
              );
            }
          }
        });
        state.totalQuantity--;
        state.totalPrice = calculateTotalPrice(state.cartList);
      }
    },
    removeAllProds: (state) => {
      state.cartList = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addProd,
  removeProd,
  increaseQuantity,
  decreaseQuantity,
  removeAllProds,
} = cartActions.actions;
export default cartActions.reducer;
