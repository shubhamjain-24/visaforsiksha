import React from "react";
import "./section7.css";
import img1 from "../../../../Images/s7-img1.jpg";
import img2 from "../../../../Images/s7-img2.jpg";
import img3 from "../../../../Images/s7-img3.jpg";
import clock from "../../../../Images/clock.svg";
import { NavLink } from "react-router-dom";

const Section7 = () => {
  return (
    <>
      <div className="s7-mainContainer">
        <div className="s7-headingDiv">
          <div className="s7-headingDiv1">
            <div className="s7-headText1">NEWS & BLOG</div>
            <div className="s7-headText2">Latest News & Blog</div>
          </div>
          <div className="s7-headingDiv2">
            <div className="s7-headText3">
              Planning to go out for studies? Draft a document? Get latest
              immigration updates throughout the globe?
            </div>
          </div>
        </div>
        <div className="s7-grid">
          <div className="s7-card1">
            <div className="s7-cardImg">
              <img className="s7-mainImage" src={img1} alt="" srcset="" />
            </div>
            <div className="s7-imageDate">
              <img className="s7-imageDateSvg" src={clock} alt="" srcset="" />{" "}
              03 Sep 2019
            </div>

            <NavLink className="Navlink" to="/blog/blog/1">
              <div className="s7-cardText1">
                Best countries for studying abroad on a budget?
              </div>
            </NavLink>
            <div className="s7-cardText2">
              A good amount of Indian students asire to or have desired at...
            </div>
          </div>
          <div className="s7-card1">
            <div className="s7-cardImg">
              <img className="s7-mainImage" src={img2} alt="" srcset="" />
            </div>
            <div className="s7-imageDate">
              <img className="s7-imageDateSvg" src={clock} alt="" srcset="" />{" "}
              03 Sep 2019
            </div>
            <NavLink className="Navlink" to="/blog/blog/2">
              <div className="s7-cardText1">
                How and why do students fail to get visas
              </div>
            </NavLink>
            <div className="s7-cardText2">
              Planing to go to UK to study? Or maybe the USA?...
            </div>
          </div>
          <div className="s7-card1">
            <div className="s7-cardImg">
              <img className="s7-mainImage" src={img3} alt="" srcset="" />
            </div>
            <div className="s7-imageDate">
              <img className="s7-imageDateSvg" src={clock} alt="" srcset="" />{" "}
              03 Sep 2019
            </div>
            <NavLink className="Navlink" to="/blog/blog/3">
              <div className="s7-cardText1">
                Why do students get rejected by Universities?
              </div>
            </NavLink>
            <div className="s7-cardText2">
              The dream of studying abroad is brought to an abrupt halt when...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
