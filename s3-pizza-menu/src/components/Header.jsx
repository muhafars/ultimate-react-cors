import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark " expand="lg" collapseOnSelect>
        <Container>
          <a href="/">
            <Navbar.Brand>Pizza Fast</Navbar.Brand>
          </a>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
