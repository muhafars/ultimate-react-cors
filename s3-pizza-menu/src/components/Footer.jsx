import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const time = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  // const hour = 23;
  const openHour = 10;
  const closeHour = 22;
  const workHour = hour >= openHour && hour <= closeHour;
  return (
    <footer variant="bottom">
      <Row className={`${workHour ? "bg-dark text-light" : "bg-dark text-danger"}`}>
        <Col md={12} className="text-center">
          <h4>{time}</h4>

          {workHour ? <p>We are currently open!</p> : <p>Sorry we are closed</p>}
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
