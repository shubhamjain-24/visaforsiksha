import React from "react";
import "./Cu_section2.css";
import img1 from "../../Images/contactUs-img1.png";
import img2 from "../../Images/contactUs-img2.png";
import img3 from "../../Images/contactUs-img3.png";

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
                  Medicaps University
                  <br /> Rau Sqaure
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
              <div className="CU_section2_gridContainer-innerDiv-textContainer">
                <div className="CU_section2-innerDiv-text1">Mail Us:</div>
                <div className="CU_section2-innerDiv-text2">
                easeuplife247@gmail.com
                </div>
              </div>
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
                  +91 88789 *****
                </div>
              </div>
            </div>
          </div>
          <div className="CU_section2_gridContainer-div2">
            <div className="CU_section2_gridContainer-div2-innerContainer">
              <div className="CU_section2_gridContainer-div2-text1">
                Send us a message
              </div>
              {/* <div className="CU_section2_gridContainer-div2-text2"> */}
              <div className="CU_section2_gridContainer-div2-IPs1">
              <input type="text" id="fname" name="fname" placeholder="First Name" required className="Input1"/>
              <input type="text" id="fname" name="fname" placeholder="Last Name " className="Input1 RESmargin" required/>
              </div>
              <input type="email" id="fname" name="fname" placeholder="Email address" required className="Input2"/>
              <textarea name="textarea"  cols="56" rows="7" placeholder="Your message here" className="textarea"></textarea>
              {/* </div> */}
              <div className="CU_section2_gridContainer-div2-button-container">
                <div className="CU_section2_gridContainer-div2-button">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cu_Section2;
