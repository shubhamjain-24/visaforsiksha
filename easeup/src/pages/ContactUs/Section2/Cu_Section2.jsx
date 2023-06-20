import React from "react";
import "./Cu_section2.css";
import img1 from "../../../Images/contactUs-img1.png";
import img2 from "../../../Images/contactUs-img2.png";
import img3 from "../../../Images/contactUs-img3.png";
import { Link } from "react-router-dom";

const Cu_Section2 = () => {
  return (
    <>
      <div className="CU_section2_mainContainer">
        <div className="CU_section2_gridContainer">
          <div className="CU_section2_gridContainer-div">
            <div className="CU_section2_gridContainer-Text1">CONTACT US</div>
            <div className="CU_section2_gridContainer-Text2">Get In Touch</div>
            <div className="CU_section2_gridContainer-Text3">
              Always their to help and deliver the best to the students.
            </div>
            <div className="CU_section2_gridContainer-innerDiv">
              <div className="CU_section2_gridContainer-innerDiv-imgContainer">
                <img
                  className="CU_section2_gridContainer-innerDiv-img"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="CU_section2_gridContainer-innerDiv-textContainer">
                <div className="CU_section2-innerDiv-text1">Visit Us:</div>
                <div className="CU_section2-innerDiv-text2">
                  J-1301 Jolly Residency, near Vijaya Laxmi Hall,
                  <br /> Vesu Road - Surat (395007)
                </div>
              </div>
            </div>
            <div
              className="CU_section2_gridContainer-innerDiv"
              style={{ marginTop: "40px" }}
            >
              <div className="CU_section2_gridContainer-innerDiv-imgContainer">
                <img
                  className="CU_section2_gridContainer-innerDiv-img"
                  src={img2}
                  alt=""
                />
              </div>
              <a href="mailto:info@studentvisasop.com">
                <div className="CU_section2_gridContainer-innerDiv-textContainer">
                  <div className="CU_section2-innerDiv-text1">Mail Us:</div>
                  <div className="CU_section2-innerDiv-text2">
                    info@studentvisasop.com
                  </div>
                </div>
              </a>
            </div>
            <div
              className="CU_section2_gridContainer-innerDiv "
              style={{ marginTop: "40px" }}
            >
              <div className="CU_section2_gridContainer-innerDiv-imgContainer">
                <img
                  className="CU_section2_gridContainer-innerDiv-img"
                  src={img3}
                  alt=""
                />
              </div>
              <div className="CU_section2_gridContainer-innerDiv-textContainer">
                <div className="CU_section2-innerDiv-text1">Phone:</div>
                <div className="CU_section2-innerDiv-text2">
                  +91 70165 22535
                </div>
              </div>
            </div>
          </div>
          <div className="CU_section2_gridContainer-div2">
            <div className="CU_section2_gridContainer-div2-innerContainer">
              <div className="CU_section2_gridContainer-div2-text1">
                Want Us To Work For You?
              </div>
              <div className="CU_section2_gridContainer-div2-text2">
                For your convenience, we have created a very useful and
                simple-to-use portal. If you want us to work for you, please
                visit it by clicking the button below, then create an ID and
                password so that we may start working on your project.
              </div>
              <div className="CU_section2_gridContainer-div2-button-container">
                <Link to="/RegisterUser">
                  <div className="CU_section2_gridContainer-div2-button">
                    Portal
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cu_Section2;
