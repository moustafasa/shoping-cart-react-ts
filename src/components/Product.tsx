import { Button, Card } from "react-bootstrap";
import { productType } from "../commonTypes";
import useAddProducts from "../customHooks/useAddProducts";
import useGetCartInfo from "../customHooks/useGetCartInfo";

const Product = ({ title, price, id, image }: productType) => {
  const addProduct = useAddProducts();
  const cartInfo = useGetCartInfo();
  const cartProd = cartInfo.products.filter((prod) => prod.id === id);
  return (
    <Card className="mt-3 mx-3 text-capitalize" style={{ width: "250px" }}>
      <Card.Header className="text-center">${title}</Card.Header>
      <div className="flex-grow-1 pt-3 d-flex align-items-center justify-content-center">
        <img
          src={image}
          style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain" }}
        />
      </div>
      <Card.Body className="ps-2" style={{ height: "fit-content", flex: "0" }}>
        <Card.Text className="d-flex flex-column justify-content-end h-100">
          <span>price: ${price}</span>
          {cartProd.length > 0 && (
            <span className="text-success">
              {cartProd[0].amount} pieces added to cart
            </span>
          )}
          <Button
            className="d-block text-capitalize mt-3"
            onClick={() => addProduct({ title, price, id, image, amount: 1 })}
          >
            add to cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
