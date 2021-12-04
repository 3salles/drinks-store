import { createContext, ReactNode, useEffect, useState } from "react";
import { Drink } from "../models";
import { api } from "../services/api";

interface DrinksProviderProps {
  children: ReactNode;
}

export const DrinksContext = createContext<Drink[]>([]);

export function DrinksProvider({ children }: DrinksProviderProps) {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    api.get("drinks").then((response) => setDrinks(response.data));
  }, []);

  return (
    <DrinksContext.Provider value={drinks}>{children}</DrinksContext.Provider>
  );
}
