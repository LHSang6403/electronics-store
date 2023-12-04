"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartActionsReducer from "./actions/cart";

export const store = configureStore({
  reducer: {
    cartReducer: cartActionsReducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
