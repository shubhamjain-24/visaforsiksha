import axios from "axios";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import InternNavigation from "./InternNavigation";
// import { ChatState } from "../../context/ChatProvider";
import img1 from "../Images/internDashmain.png";
import "./InternDashboard.css";
import { Link, useNavigate } from "react-router-dom";

const InternDashoard = () => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  return (
    <>
      {" "}
      <InternNavigation />
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SOPIFY INTERN DASHBOARD</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/clientdetails">
                <Nav.Link>All Clients</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/chat">
                <Nav.Link>My Chats</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/particularClient">
                <Nav.Link>Particular Client Info</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/approvalstatus">
                <Nav.Link>Approval Status</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div className="internDashboard_mainContainer">
        <div className="internDashboard_subContainer1">
          <div className="internDashboard_subContainer1_inner">
            <h1 className="ID_head">Welcome,</h1>
            <h3 className="ID_head2">{userInfo.name}</h3>
            <p className="Id_head3">
              Welcome to the team! We're excited to have you here as an intern.
              We hope this experience will be valuable and rewarding for you,
              and we look forward to working together.
            </p>
            <br />
            <Link to="/particularClient">
              <Button> Get started</Button>
            </Link>
          </div>
        </div>
        <div className="internDashboard_subContainer2">
          <img className="internDashboard_Image" src={img1} />
        </div>
      </div>
    </>
  );
};

export default InternDashoard;
