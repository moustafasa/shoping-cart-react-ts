import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useRemoveProudcts = () => {
  const { removeProduct } = useContext(CartContext);

  return removeProduct;
};

export default useRemoveProudcts;
