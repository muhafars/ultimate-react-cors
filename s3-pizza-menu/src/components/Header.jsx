import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark " expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="text-center">
            <img
              src={logo}
              alt="Pizza Fast"
              height="40"
              width="40"
              className="d-inline " // Align the image properly
            />{" "}
            Pizza Fast
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
