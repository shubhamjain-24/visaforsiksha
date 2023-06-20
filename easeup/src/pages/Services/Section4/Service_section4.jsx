import React from "react";
import "./Service_section4.css";
import img1 from "../../../Images/service-s4-img1.jpg";

const Service_section4 = () => {
  return (
    <>
      <div className="Service_s4_mainContainer">
        <div className="Service_s4_gridContainer">
          <div className="Service_s4_gridContainer_div">
            <img className="Service_s4_gridContainer_img" src={img1} alt="" />
          </div>
          <div className="Service_s4_gridContainer_div1">
            <div className="Service_s4_gridContainer_div1_textContainer">
              <div className="Service_s4_gridContainer_div1_text">
                LET'S TALK
              </div>
              <div className="Service_s4_gridContainer_div1_text2">
                Request a Free Quote
              </div>
            </div>
            <div className="Service_s4_gridContainer_div1_inputs1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="name_input"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                className="name_input"
              />
            </div>
            <div className="Service_s4_gridContainer_div1_inputs2">
              <input
                type="phone"
                name="phone"
                placeholder="Phone Number"
                className="name_input"
              />
              <input
                type="email"
                name="website"
                placeholder="Your Website"
                className="name_input"
              />
            </div>
            <div className="Service_s4_gridContainer_div1_inputs2">
              <textarea
                className="textarea"
                name="textarea"
                rows="5"
                cols="80"
                placeholder="Your Message Here"
              ></textarea>
            </div>
            <div className="Serivce_s4_mainContainer_button">GET STARTED</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service_section4;
