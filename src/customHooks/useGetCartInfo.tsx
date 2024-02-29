import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useGetCartInfo = () => {
  const { state } = useContext(CartContext);

  return state;
};

export default useGetCartInfo;
