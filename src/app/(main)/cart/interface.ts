import { type ProductData } from "@app/interface";

export interface CartItem extends ProductData {
  quantity: number;
}
