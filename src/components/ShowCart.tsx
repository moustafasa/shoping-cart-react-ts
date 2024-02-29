import { Button, Container, Table } from "react-bootstrap";
import useGetCartInfo from "../customHooks/useGetCartInfo";
import useRemoveProudcts from "../customHooks/useRemoveProudcts";

const ShowCart = () => {
  const cartInfo = useGetCartInfo();
  const removeProduct = useRemoveProudcts();
  return (
    <Container className="pt-5 text-capitalize text-center">
      <Table responsive align="center" striped style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>amount</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {cartInfo.products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td style={{ width: "max-content" }}>
                <div className="d-flex justify-content-center align-items-center">
                  <img width={"200px"} src={prod.image} />
                </div>
              </td>
              <td>${prod.price.toFixed(2)}</td>
              <td>{prod.amount}</td>
              <td>
                <Button variant="danger" onClick={() => removeProduct(prod.id)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ShowCart;
