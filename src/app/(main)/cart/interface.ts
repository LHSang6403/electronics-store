import { type ProductData } from "@/app/interface";

export interface CartItem extends ProductData {
  quantity: number;
}
export interface SquareBannerProps {
  image: string;
  title: string;
  description: string;
}

export interface QuantityButtonProps {
  id: string;
}

export interface SaleProps {
  data: string;
}
