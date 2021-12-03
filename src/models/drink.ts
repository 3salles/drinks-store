export type Brands = 'BR' | 'VE' | 'JP' | 'FR';

export interface Drink {
  brand: Brands;
  name: string;
}

export interface CardDrink {
  id: number;
  drink: Drink;
  image?: string;
}