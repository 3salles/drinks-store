export type Brands = 'BR' | 'VE' | 'JP' | 'FR';

export interface Drink {
  id: number;
  brand: Brands;
  name: string;
  createdAt: string;
}
