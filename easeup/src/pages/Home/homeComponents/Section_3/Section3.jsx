import React from "react";
import "./section3.css";
import img1 from "../../../../Images/s3-img1.jpg";
import img2 from "../../../../Images/s3-img2.jpg";
import img3 from "../../../../Images/s3-img3.jpg";
import pencil from "../../../../Images/pencil.png";
import { NavLink } from "react-router-dom";

const Section3 = () => {
  return (
    <>
      <div className="s3-mainContainer">
        <div className="s3-headingDiv">
          <div className="s3-headingDiv1">
            {/* <div className="s3-headText1">
                    NEWS & BLOG
                </div> */}
            <div className="s3-headText2">Our Services</div>
          </div>
          <div className="s3-headingDiv2">
            <div className="s3-headText3">
              We help students create a better future by helping them to get
              into their desired college and/or Universities.
            </div>
          </div>
        </div>
        <div className="s3-grid">
          <NavLink className="Navlink" to="/sop">
            <div className="s3-card1">
              <div className="s3-pecilDiv">
                <div className="s3-cardImg">
                  <img className="s3-mainImage" src={img1} alt="" srcset="" />
                </div>
                <div className="s3-pencil">
                  <img className="s3-pencilSvg" src={pencil} alt="" srcset="" />
                </div>
              </div>

              <div className="s3-cardText1">SOP</div>
              <div className="s3-cardText2">
                Writing non-plagiarised Statement of Purpose for University
                admissions, Visa approvals, scholarships, and more.
              </div>
            </div>
          </NavLink>
          <NavLink className="Navlink" to="/lor">
            <div className="s3-card1">
              <div className="s3-pecilDiv">
                <div className="s3-cardImg">
                  <img className="s3-mainImage" src={img2} alt="" srcset="" />
                </div>
                <div className="s3-pencil">
                  <img className="s3-pencilSvg" src={pencil} alt="" srcset="" />
                </div>
              </div>
              <div className="s3-cardText1">LOR</div>
              <div className="s3-cardText2">
                Letter of Recommendation for strengthening your University
                applications or job profiles.
              </div>
            </div>
          </NavLink>
          <NavLink className="Navlink" to="/assignment">

          <div className="s3-card1">
            <div className="s3-pecilDiv">
              <div className="s3-cardImg">
                <img className="s3-mainImage" src={img3} alt="" srcset="" />
              </div>
              <div className="s3-pencil">
                <img className="s3-pencilSvg" src={pencil} alt="" srcset="" />
              </div>
            </div>
            <div className="s3-cardText1">Assignments</div>
            <div className="s3-cardText2">
              Providing well-researched and structured University assignments.
            </div>
          </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Section3;
