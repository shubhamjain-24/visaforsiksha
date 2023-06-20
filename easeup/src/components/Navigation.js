import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="sm" style={{ backgroundColor: "#a6b7ff", height: "5rem" }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>SOPIFY CHECKER DASHBOARD</Navbar.Brand>
          {/* <Navbar.Brand>EASEUP</Navbar.Brand> */}
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/blog">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>

            {/* 
            <LinkContainer to="/PandC">
              <Nav.Link>Community Support</Nav.Link>
            </LinkContainer> */}

            <LinkContainer to="/SignInChecker">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/listenerregister">
              <Nav.Link>Register As Intern</Nav.Link>
            </LinkContainer> */}

            {/* <LinkContainer to="/ListenerLogin">
              <Nav.Link>Login Intern</Nav.Link>
            </LinkContainer> */}

            {/* <LinkContainer to="/RegisterUser">
              <Nav.Link>Register User</Nav.Link>
            </LinkContainer> */}

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

export default Navigation;
