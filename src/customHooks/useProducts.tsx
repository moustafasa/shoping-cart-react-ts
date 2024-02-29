import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

export const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};
