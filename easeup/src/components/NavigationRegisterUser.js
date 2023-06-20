import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const NavigationRegisterUser = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "fixed", top: "0", zIndex: "900", width: "100%" }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>SOPIFY</Navbar.Brand>
          {/* <Navbar.Brand>EASEUP</Navbar.Brand> */}
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/RegisterUser">
              <Nav.Link>Log-In/Sign-Up</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/aboutUs">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactUs">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // export default BasicExample;
  );
};

export default NavigationRegisterUser;
