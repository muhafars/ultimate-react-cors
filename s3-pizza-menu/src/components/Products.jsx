import { Card, CardGroup, Col, Row } from "react-bootstrap";
import pizzaData from "../data.js";
const Products = () => {
  return (
    <Row xs={1} md={4} className=" my-4">
      {pizzaData.map((p, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={p.photoName} alt={p.name} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>{p.ingredients}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
