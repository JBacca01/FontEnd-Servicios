export interface ProductoInterface {
  id: number;
  title: string;
  price: number;
  images: string[];
  description?: string;
  category: {
    id: number;
    name: string;
  };
}