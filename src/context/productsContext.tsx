import {
  ReactNode,
  createContext,
  startTransition,
  useEffect,
  useState,
} from "react";
import { childType, productType } from "../commonTypes";
import axios from "axios";

export const ProductsContext = createContext<productType[]>([]);

const ProductsProvider = ({ children }: childType) => {
  const [products, setProducts] = useState<productType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios<productType[]>(
          "http://fakestoreapi.com/products?limit=20"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    startTransition(() => {
      getProduct();
    });
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
