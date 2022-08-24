import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg"
    style={{backdropFilter: "blur(10px)"}}>
        <Container fluid     
        style={{width:"85%"}}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
            <Nav.Link href="#actionMain" id="navbarScrollingDropdown"
            style={{textDecoration:"underline"}}>onboard your store ></Nav.Link>
              {/* <NavDropdown
                title="onboard your store "
                id="navbarScrollingDropdown"
                style={{textDecoration:"underline"}}
              >
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px",paddingRight:"50px"}}
              navbarScroll
            >
              
              <Nav.Link href="#action1">Resources</Nav.Link>
              <Nav.Link href="#action2">Our Community</Nav.Link>
              <Nav.Link href="#action3">What We Build</Nav.Link>
              <Nav.Link href="#action4">Who We Are</Nav.Link>
            </Nav>
              <Navbar.Brand href="#"
              style={{fontWeight: "bold"}}>rulrr</Navbar.Brand>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
