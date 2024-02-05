export interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
  description_id: string;
  image: string;
  sale?: string;
  rating: number;
  is_deleted: boolean;
  products_description: {
    id: string;
    content: string;
    images: string[];
  };
}
