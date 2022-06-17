import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">RateMyDay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" >About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;
