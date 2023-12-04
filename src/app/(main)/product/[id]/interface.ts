import { type ProductData } from "@/app/interface";

export interface DescribeIn2ColsProps {
  image: string;
  description: string;
  isReverse: boolean;
}

export interface SquareBanner {
  image: string;
  title: string;
  description: string;
}

export interface ProductDetailImages {
  product: string;
  image_0: string;
  image_1: string;
  image_2: string;
  image_3: string;
}

export interface ProductDetailDescription {
  product: string;
  name: string;
  description: string;
}

export interface ProductDescriptionProps {
  data: {
    productData: ProductData;
  };
}

export interface ProductInfoProps {
  data: {
    squareBannerData: SquareBanner;
    productData: ProductData;
  };
}
