import React from "react";
import "./Section2.css";
import img1 from "../../Images/pandc-img2.png";

const Section2 = () => {
  return (
    <>
      <div className="PandC-s2-mainContainer">
        <div className="PandC-s2-gridContainer">
          <div className="PandC-s2-gridDiv">
            <div className="PandC-s2-gridDiv2-textDiv">
              <div className="PandC-s2-gridDiv2-text1">Our Programme</div>
              <div className="PandC-s2-gridDiv2-text2">
                Our platform offers a number of programmes to promote mental
                health because it is the area of medicine that our society
                neglects the most. For this reason, it is crucial to have a
                proper understanding of mental health, thus we invited a number
                of expert speakers to share their knowledge.
                <br />
                <span className="PandC-s2-gridDiv2-text3">
                  Click on the button to join our Programs
                </span>
              </div>
              <div className="PandC-s2-gridDiv2-ButtonDiv">
                {/* <span class="material-symbols-outlined PandCButton">
                  diversity_1
                </span> */}
                Join Now
              </div>
            </div>
          </div>
          <div className="PandC-s2-gridDiv2">
            <div className="PandC-s2-gridDiv-ImgContainer">
              <img className="PandC-s2-gridDiv-Img1" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
