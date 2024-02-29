import { ReactNode } from "react";

export interface productType {
  title: string;
  price: number;
  id: string;
  image: string;
}

export type childType = { children: ReactNode };
