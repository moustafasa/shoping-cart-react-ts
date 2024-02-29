import { createContext, useCallback, useReducer } from "react";
import { childType, productType } from "../commonTypes";

type cartProduct = productType & { amount: number };

type stateType = {
  products: cartProduct[];
  totalPrice: number;
  totalItems: number;
};

const enum cartAction {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
}

type reducerAction = { type: cartAction; payload: cartProduct | string };

const initState: stateType = {
  products: [],
  totalPrice: 0,
  totalItems: 0,
};

const reducer = (state = initState, action: reducerAction): stateType => {
  switch (action.type) {
    case cartAction.ADD_PRODUCT: {
      let founded = false;
      const payload = action.payload as cartProduct;

      //check if the product is on the state to increase the amount
      const newState = state.products.map((product) => {
        if (product.id === payload.id) {
          founded = true;
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });

      // if the product isn't on the state add it
      if (!founded) {
        newState.push(payload);
      }

      const totalPrice = state.totalPrice + payload.price * payload.amount;

      // return new state
      return {
        totalItems: state.totalItems + 1,
        totalPrice,
        products: newState,
      };
    }
    case cartAction.REMOVE_PRODUCT: {
      const newState = state.products.filter(
        (pro) => pro.id !== (action.payload as string)
      );

      const { totalItems, totalPrice } = newState.reduce(
        (prev, curr): Pick<stateType, "totalItems" | "totalPrice"> => {
          return {
            totalItems: prev.totalItems + curr.amount,
            totalPrice: prev.totalPrice + curr.price * curr.amount,
          };
        },
        { totalItems: 0, totalPrice: 0 }
      );

      return { totalItems, totalPrice, products: newState };
    }
    default:
      return state;
  }
};

const useCartContext = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addProduct = useCallback((product: cartProduct) => {
    dispatch({ type: cartAction.ADD_PRODUCT, payload: product });
  }, []);

  const removeProduct = useCallback((id: string) => {
    dispatch({ type: cartAction.REMOVE_PRODUCT, payload: id });
  }, []);

  return { state, addProduct, removeProduct };
};

type useCartContextType = ReturnType<typeof useCartContext>;

const initContextState: useCartContextType = {
  state: initState,
  addProduct(product) {},
  removeProduct(id) {},
};
export const CartContext = createContext<useCartContextType>(initContextState);

const CartProvider = ({ children }: childType) => {
  const contextValue = useCartContext();
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
