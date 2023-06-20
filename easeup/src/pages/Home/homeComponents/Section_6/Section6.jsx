import React from "react";
import "./section6.css";
import img1 from "../../../../Images/s6-img1.jpg";
import img2 from "../../../../Images/s6-img2.jpg";

const Section6 = () => {
  return (
    <div className="s6-big-container">
      <div className="s6-mainContainer">
        <div className="s6-backContainer">
          <div className="s6-backLeft">
            <img className="s6-backLeftImg" src={img1} alt="" />
          </div>
          <div className="s6-backRight">
            <img className="s6-backRightImg" src={img2} alt="" />
          </div>
          <div className="s6-frontContainer">
            <div className="s6-frontContainerText">
              Let's upgrade your future together.
            </div>
            <div className="s6-frontContainerButton">
              <button className="s6-button">Contact Now</button>
            </div>
          </div>
          <div className="s6-frontContainer2">
          <div className="s6-frontContainerText">
              Let's upgrade your future together.
            </div>
            <div className="s6-frontContainerButton">
              <button className="s6-button">Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
