import useGetCartInfo from "../customHooks/useGetCartInfo";
import { useProducts } from "../customHooks/useProducts";
import Product from "./Product";
import { Container } from "react-bootstrap";

const ShowedProducts = () => {
  const products = useProducts();

  return (
    <Container>
      <div className="row gap-4 pt-3 justify-content-center">
        {products.map((product) => (
          <Product
            title={product.title}
            id={product.id}
            image={product.image}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default ShowedProducts;
