import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="NavBar">
        <div className="NavBar-nav">
          <ul className="Navigation">
            <li className="Nav-list">
              <a href="/">Home Page</a>
            </li>
            <li className="Nav-list">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="Nav-list">
              <a href="/PandC">Communities and Programs</a>
            </li>
            <li className="Nav-list">
              <a href="/aboutUs">About us / Donation</a>
            </li>
            <li className="Nav-list">
              <a href="/contactUs">Contact Us</a>
            </li>
            <li className="Nav-list">
              <a href="#">login/Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas show={show} className="off_canvas" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>HealthCare</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_Nav-list">
                  <a href="/">Home Page</a>
                </li>
                <li className="R_Nav-list">
                  <a href="#">Blogs</a>
                </li>
                <li className="R_Nav-list">
                  <a href="#">Communities and Programs</a>
                </li>
                <li className="R_Nav-list">
                  <a href="#">About us / Donation</a>
                </li>
                <li className="R_Nav-list">
                  <a href="#">Contact Us</a>
                </li>
                <li className="R_Nav-list">
                  <a href="#">login/Sign Up</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}

export default NavBar;
