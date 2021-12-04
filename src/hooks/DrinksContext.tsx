import { createContext, ReactNode, useEffect, useState } from "react";
import { Drink } from "../models";
import { api } from "../services/api";

interface DrinksProviderProps {
  children: ReactNode;
}

interface DrinksContextData {
  drinks: Drink[];
  createDrink: (drink: DrinkInput) => Promise<void>;
}

type DrinkInput = Omit<Drink, "id" | "createdAt">;

export const DrinksContext = createContext<DrinksContextData>(
  {} as DrinksContextData
);

export function DrinksProvider({ children }: DrinksProviderProps) {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    api.get("drinks").then((response) => setDrinks(response.data.drinks));
  }, []);

  async function createDrink(drinkInput: DrinkInput) {
    const response = await api.post("/drinks", {
      ...drinkInput,
      createdAt: new Date(),
    });
    const { drink } = response.data

    setDrinks([
      ...drinks,
      drink,
    ])
  }

  return (
    <DrinksContext.Provider value={{ drinks, createDrink }}>
      {children}
    </DrinksContext.Provider>
  );
}
