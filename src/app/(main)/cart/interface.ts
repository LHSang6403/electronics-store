import { type ProductData } from "@/app/(main)/product/interface";

export interface CartItem extends ProductData {
  quantity: number;
}
