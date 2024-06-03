import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../App.css";

const NavbarComp = () => {
  let name = "{R}";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar className="main-nav" sticky="top">
        <Container>
          <Navbar.Brand>{name}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Button variant="outline-secondary">Hire me</Button>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
