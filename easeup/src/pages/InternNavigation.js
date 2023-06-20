import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom";
import "../components/Navbar/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
// import { ChatState } from "../../context/ChatProvider";

const InternNavigation = () => {
  const [first, setfirst] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  function Logout() {
    // Remove the userInfo data from local storage
    localStorage.removeItem("userInfo");

    // Clear the userInfo state
    userInfo = null;

    // Redirect the user to the login page
    const history = useNavigate();
    history("/login");
  }
  return (
    <>
      <div
        className="navbars"
        style={{ backgroundColor: "#a6b7ff", height: "5rem" }}
      >
        <div className="navbar-child">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            <NavLink className="Navlink" to="/internDashboard">
              SOPIFY INTERN DASHBOARD
            </NavLink>
          </div>
          <ul className="navbar-ul">
            <NavLink className="Navlink" to="/chat">
              <li className="navbar-li">My Chats</li>
            </NavLink>
            <NavLink className="Navlink" to="/particularClient">
              <li className="navbar-li">Particular Client Info</li>
            </NavLink>
            <NavLink className="Navlink" to="/approvalstatus">
              <li className="navbar-li">Approval Status</li>
            </NavLink>
            {/* <NavLink className="Navlink" to="/clientdetails">
              <li className="navbar-li">All Clients</li>
            </NavLink> */}
            <NavLink className="Navlink" onClick={Logout}>
              <li className="navbar-li">Logout</li>
            </NavLink>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            SOPIFY INTERN DASHBOARD
          </div>
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas
            show={show}
            placement="end"
            className="off_canvas"
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>SOPIFY</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_navs-list">
                  <a href="/internDashboard">Intern Dashoard</a>
                </li>
                <li className="R_navs-list">
                  <a href="/chat">My Chats</a>
                </li>
                <li className="R_navs-list">
                  <a href="/particularClient">Particular Client Info</a>
                </li>
                <li className="R_navs-list">
                  <a href="/approvalstatus">Apporaval Status</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default InternNavigation;
