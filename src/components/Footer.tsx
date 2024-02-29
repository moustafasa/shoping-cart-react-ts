import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="position-absolute bottom-0 fw-bold  pb-2 text-capitalize">
      <Container fluid>
        <div>shopping cart &copy; {new Date().getFullYear()}</div>
      </Container>
    </div>
  );
};

export default Footer;
