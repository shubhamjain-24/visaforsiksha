import React from "react";
import "./service_section2.css";
import img1 from "../../../Images/Service-s2-img1.jpg";
import img2 from "../../../Images/Service-s2-img2.png";
import img3 from "../../../Images/Service-s2-img3.png";
import { NavLink } from "react-router-dom";

const Service_section2 = () => {
  return (
    <>
      <div className="serivce_s2_mainContainer">
        <div className="serivce_s2_gridContainer">
            {/* DIV 1 */}
            {/* <NavLink */}
          <div className="serivce_s2_gridDiv">
            <div className="serivce_s2_gridDiv_imgDiv">
                <img className="serivce_s2_gridDiv_img" src={img1} alt="" />
            </div>
            <div className="serivce_s2_gridDiv_textDiv">
                <div className="serivce_s2_gridDiv_textDiv_head">
                    SOP
                </div>
                <div className="serivce_s2_gridDiv_textDiv_text">
                Writing non-plagiarised Statement of Purpose for University admissions, Visa approvals, scholarships, and more.
                </div>
            </div>
          </div>


            {/* DIV 2 */}
          <div className="serivce_s2_gridDiv">
            <div className="serivce_s2_gridDiv_imgDiv">
                <img className="serivce_s2_gridDiv_img" src={img2} alt="" />
            </div>
            <div className="serivce_s2_gridDiv_textDiv">
                <div className="serivce_s2_gridDiv_textDiv_head">
                    LOR
                </div>
                <div className="serivce_s2_gridDiv_textDiv_text">
                Letter of Recommendation for strengthening your University applications or job profiles.
                </div>
            </div>
          </div>


            {/* DIV 3 */}
          <div className="serivce_s2_gridDiv">
            <div className="serivce_s2_gridDiv_imgDiv">
                <img className="serivce_s2_gridDiv_img" src={img3} alt="" />
            </div>
            <div className="serivce_s2_gridDiv_textDiv">
                <div className="serivce_s2_gridDiv_textDiv_head">
                    Assignmnets
                </div>
                <div className="serivce_s2_gridDiv_textDiv_text">
                Providing well-researched and structured University assignments.
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service_section2;
