import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useAddProducts = () => {
  const { addProduct } = useContext(CartContext);
  return addProduct;
};

export default useAddProducts;
