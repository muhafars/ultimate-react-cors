import { Card, Col, Row } from "react-bootstrap";
import pizzaData from "../data.js";
const Products = () => {
  return (
    <Row xs={1} md={4} className="my-6">
      {pizzaData.map((p, idx) => (
        <Col key={idx}>
          <Card style={{ opacity: p.soldOut ? 0.4 : 1 }}>
            <Card.Img variant="top" src={p.photoName} alt={p.name} />
            <Card.Body>
              <Card.Title as="h4">{p.name}</Card.Title>
              <Card.Text as="div">{p.ingredients}</Card.Text>
              <Card.Text as="p">{p.soldOut ? "Sold Out" : p.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
