import React from "react";
import "./AU_section5.css";
import img1 from "../../../Images/aboutUs-img4.jpeg";
import img2 from "../../../Images/aboutUs-img5.jpeg";
import img3 from "../../../Images/aboutUs-img6.jpeg";
import img4 from "../../../Images/aboutUs-img7.jpeg";

const AU_Section5 = () => {
  return (
    <>
      <div className="AU_section5_mainContainer">
        <div className="AU_section5_TextContainer">
          <p className="AU_section5_TextContainer-Text1">PROFESSIONAL TEAM</p>
          <p className="AU_section5_TextContainer-Text2">
            Meet With Expert Team
          </p>
        </div>
        <div className="AU_section5_gridContainer">
          <div className="AU_section5_gridContainerDiv">
            <img
              className="AU_section5_gridContainerDiv-img"
              src={img1}
              alt=""
            />
            <div className="AU_section5_gridContainerDiv-textDiv">
              <div className="AU_section5_gridContainerDiv-text1">
                Aniket Shah
              </div>
              <div className="AU_section5_gridContainerDiv-text2">
                Founder and CEO
              </div>
            </div>
          </div>
          <div className="AU_section5_gridContainerDiv">
            <img
              className="AU_section5_gridContainerDiv-img"
              src={img2}
              alt=""
            />
            <div className="AU_section5_gridContainerDiv-textDiv">
              <div className="AU_section5_gridContainerDiv-text1">
                Jitendra Sadhwani
              </div>
              <div className="AU_section5_gridContainerDiv-text2">
                CFO & COO
              </div>
            </div>
          </div>
          <div className="AU_section5_gridContainerDiv">
            <img
              className="AU_section5_gridContainerDiv-img"
              src={img3}
              alt=""
            />
            <div className="AU_section5_gridContainerDiv-textDiv">
              <div className="AU_section5_gridContainerDiv-text1">
                Nirvi Shukla
              </div>
              <div className="AU_section5_gridContainerDiv-text2">
                Chief Quality Officer
              </div>
            </div>
          </div>
          <div className="AU_section5_gridContainerDiv">
            <img
              className="AU_section5_gridContainerDiv-img"
              src={img4}
              alt=""
            />
            <div className="AU_section5_gridContainerDiv-textDiv">
              <div className="AU_section5_gridContainerDiv-text1">
                Sanika Naik
              </div>
              <div className="AU_section5_gridContainerDiv-text2">
                Chief Marketing Officer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AU_Section5;
