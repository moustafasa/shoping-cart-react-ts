import { Button, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import useGetCartInfo from "../customHooks/useGetCartInfo";
import { Link } from "react-router-dom";
import { ElementType, ReactElement, ReactNode, forwardRef } from "react";

const Header = () => {
  const cartInfo = useGetCartInfo();
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-start text-capitalize p-3 border-bottom">
        <h2>
          shopping <FaShoppingCart />
        </h2>
        <div className="d-flex flex-column gap-2 align-items-end">
          <span>total items: {cartInfo.totalItems}</span>
          <span>total prices: ${cartInfo.totalPrice.toFixed(2)}</span>
          <Link to={"/cart"} className="btn btn-info text-capitalize">
            view cart
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
