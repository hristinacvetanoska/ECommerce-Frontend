import { User } from "./user";

export interface NewProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  type?: string;
  brand: string;
  quantityInStock?: number;
  userId: number;
  user: User;
}
