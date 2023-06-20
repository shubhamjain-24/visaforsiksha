import React from "react";
import "./Footer.css";
import logo1 from "../../Images/icon1.png";
import logo2 from "../../Images/icon2.png";
import logo3 from "../../Images/icon3.png";

const Footer = () => {
  return (
    <>
      <div className="footer-mainContainer">
        <div className="footer-gridContainer">
          <div className="footer-gridDiv">
            <div className="footer_LogoDiv">
              <h1 className="footerLogo">LOGO</h1>
              <div className="footer_textDiv">
                Talking with an expert with our highly end to end encrypted
                services
              </div>
            </div>
            <div className="footer_iconDiv">
              <img className="footerIcon" src={logo1} alt="" />
              <img className="footerIcon" src={logo2} alt="" />
              <img className="footerIcon" src={logo3} alt="" />
            </div>
          </div>
          <div className="footer-gridDiv2">
            <h1 className="footerLogo">Join Us</h1>
              <ul className="Footer_list">
                <li>As a College</li>
                <li>As a Intern</li>
                <li>As a Community</li>
                <li>As a Paitent</li>
              </ul>
          </div>
          <div className="footer-gridDiv2">
          <ul className="Footer_list2">
                <li>Tools</li>
                <li>FAQ</li>
                <li>Blogs</li>
                <li>About Us</li>
                <li>Terms</li>
                <li>Support</li>
                <li>Help</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
