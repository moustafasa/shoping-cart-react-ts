import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowedProducts from "./components/ShowedProducts";
import ShowCart from "./components/ShowCart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<ShowedProducts />} />
        <Route path="/cart" element={<ShowCart />} />
      </Route>
    )
  );

  return (
    <div className="pb-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
