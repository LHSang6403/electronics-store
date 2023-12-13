export interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  sale?: string;
  rating: number;
}

export interface User {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  image: string;
}
