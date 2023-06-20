// import React from "react";
import "./navbar.css";
import logo from "../../Images/logo.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

// const Navbar = () => {
//   const [first, setfirst] = useState(false);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <div className="navbar">
//         <div className="navbar-child">
//           <div className="nav-logo">
//             <img src={logo} className="nav-logoImg" alt="" />
//           </div>
//           <ul className="navbar-ul">
//             <NavLink className="Navlink" to="/">
//               <li className="navbar-li">HOME</li>
//             </NavLink>
//             <li
//               className="navbar-li nav-services"
//               onMouseEnter={() => setfirst(true)}
//               onMouseLeave={() => setfirst(false)}
//             >
//               <NavLink className="Navlink" to="/services">
//                 <span className="span-service">
//                   SERVICES {first ? <p>-</p> : <p>+</p>}
//                 </span>
//               </NavLink>
//               <div className="nav-dropdown">
//                 <div className="nav-dropMenu">
//                   <ul className="drop-ul">
//                     <NavLink className="Navlink" to="/sop">
//                       <li className="drop-li">SOP: Statement of Purpose</li>
//                     </NavLink>
//                     <NavLink className="Navlink" to="/lor">
//                       <li className="drop-li">LOR: Letter of Recommendation</li>
//                     </NavLink>
//                     <NavLink className="Navlink" to="/assignment">
//                       <li className="drop-li">Assignment</li>
//                     </NavLink>
//                   </ul>
//                 </div>
//               </div>
//             </li>
//             <NavLink className="Navlink" to="/blog">
//               <li className="navbar-li">BLOGS</li>
//             </NavLink>
//             <NavLink className="Navlink" to="/aboutus">
//               <li className="navbar-li">ABOUT US</li>
//             </NavLink>
//             <NavLink className="Navlink" to="/contactus">
//               <li className="navbar-li">CONTACT US</li>
//             </NavLink>
//             <NavLink className="Navlink" to="/RegisterUser">
//               <li className="navbar-li">LOGIN/SIGNUP</li>
//             </NavLink>
//           </ul>
//         </div>
//         <div className="R_NavBar-nav">
//           <div className="nav-logo">
//             <img src={logo} className="nav-logoImg" alt="" />
//           </div>
//           <div onClick={handleShow} className="Burger">
//             <div className="line"></div>
//             <div className="line"></div>
//             <div className="line"></div>
//           </div>
//           <Offcanvas
//             show={show}
//             placement="end"
//             className="off_canvas"
//             onHide={handleClose}
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>SOPIFY</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <ul className="R_Navigation">
//                 <li className="R_Nav-list">
//                   <a href="/home">Home Page</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/">Blogs</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/services">Services</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/sop">SOP</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/lor">LOP</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/assignment">Assignment</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/aboutus">Contact Us</a>
//                 </li>
//                 <li className="R_Nav-list">
//                   <a href="/contactus">About Us</a>
//                 </li>
//               </ul>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import "./navbar.css";
// import logo from "../../Images/logo.png";
// import { useState } from "react";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";

const Navbar = () => {
  const [first, setfirst] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbars">
        <div className="navbar-child">
          <div className="navs-logo">
            <img src={logo} className="navs-logoImg" alt="" />
          </div>
          <ul className="navbar-ul">
            <NavLink className="Navlink" to="/">
              <li className="navbar-li">HOME</li>
            </NavLink>
            <li
              className="navbar-li navs-services"
              onMouseEnter={() => setfirst(true)}
              onMouseLeave={() => setfirst(false)}
            >
              <NavLink className="Navlink" to="/services">
                <span className="span-service">
                  SERVICES {first ? <p>-</p> : <p>+</p>}
                </span>
              </NavLink>
              <div className="navs-dropdown">
                <div className="navs-dropMenu">
                  <ul className="drop-ul">
                    <NavLink className="Navlink" to="/sop">
                      <li className="drop-li">SOP: Statement of Purpose</li>
                    </NavLink>
                    <NavLink className="Navlink" to="/lor">
                      <li className="drop-li">LOR: Letter of Recommendation</li>
                    </NavLink>
                    <NavLink className="Navlink" to="/assignment">
                      <li className="drop-li">Assignment</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </li>
            <NavLink className="Navlink" to="/blog">
              <li className="navbar-li">BLOGS</li>
            </NavLink>
            <NavLink className="Navlink" to="/aboutus">
              <li className="navbar-li">ABOUT US</li>
            </NavLink>
            <NavLink className="Navlink" to="/contactus">
              <li className="navbar-li">CONTACT US</li>
            </NavLink>
            <NavLink className="Navlink" to="/RegisterUser">
              <li className="navbar-li">LOGIN/SIGNUP</li>
            </NavLink>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="navs-logo">
            <img src={logo} className="navs-logoImg" alt="" />
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
                  <a href="/">Home Page</a>
                </li>
                <li className="R_navs-list">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="R_navs-list">
                  <a href="/services">Services</a>
                </li>
                <li className="R_navs-list">
                  <a href="/sop">SOP</a>
                </li>
                <li className="R_navs-list">
                  <a href="/lor">LOR</a>
                </li>
                <li className="R_navs-list">
                  <a href="/assignment">Assignment</a>
                </li>
                <li className="R_navs-list">
                  <a href="/aboutus">Contact Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/contactus">About Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/RegisterUser">Login In/Sign Up</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Navbar;
