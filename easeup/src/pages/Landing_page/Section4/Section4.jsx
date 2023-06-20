import React from "react";
import "./Section4.css";
import img1 from "../../Images/s4-img.png";

const Section4 = () => {
  return (
    <>
      <div className="s4-mainContainer">
        <div className="s4-gridContainer">
          <div className="s4-gridDiv1">
            <div className="s4-gridImgContaier">
              <img className="s4-gridImg" src={img1} alt="" />
            </div>
          </div>
          <div className="s4-gridDiv2">
            <div className="s4-gridDiv2-textContainer">
              <div className="s4-gridDiv2-text1">
                Start an online <br />
                discussion with an expert.
              </div>
              <div className="s4-gridDiv2-text2">
                You can talk with our experts whenever it suits you and is
                convenient for you to do so. We have a number of professionals
                in many fields available on our platform who can assist you.
              </div>
              <div className="s4-grid-iconsDiv">
                <div className="s4-grid-icon">
                  <div className="s4-grid-icon1">
                    <span class="material-symbols-outlined s4-icons">chat</span>
                    <span className="s4-iconText"> Chat</span>
                  </div>
                  <div className="s4-grid-icon1">
                    <span class="material-symbols-outlined s4-icons">call</span>
                    <span className="s4-iconText"> Phone</span>
                  </div>
                </div>
                <div className="s4-grid-icon">
                  <div className="s4-grid-icon1">
                    <span class="material-symbols-outlined s4-icons">contact_support</span>
                    <span className="s4-iconText"> Query</span>
                  </div>
                  <div className="s4-grid-icon1">
                    <span class="material-symbols-outlined s4-icons">video_call</span>
                    <span className="s4-iconText"> Video </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="s4-grid2-button">
                Start Chat Consultation
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
