import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/global.scss";
import ProductsProvider from "./context/productsContext.tsx";
import CartProvider from "./context/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);
