import React from "react";
import "./Section1.css";
import img1 from "../../Images/pandc-imgnew.png";

const Section1 = () => {
  return (
    <>
      <div className="PandC-s1-mainContainer">
        <div className="PandC-s1-gridContainer">
          <div className="PandC-s1-gridDiv">
            <div className="PandC-s1-gridDiv-ImgContainer">
              <img className="PandC-s1-gridDiv-Img1" src={img1} alt="" />
            </div>
          </div>
          <div className="PandC-s1-gridDiv2">
            <div className="PandC-s1-gridDiv2-textDiv">
              <div className="PandC-s1-gridDiv2-text1">Our Community</div>
              <div className="PandC-s1-gridDiv2-text2">
                There are many benefits of joining our community because we have
                special members from all over the world who are always willing
                to assist others in improving their quality of life. In
                addition, we have therpaists and physicists from over 7
                countries who are eager to assist others in changing their way
                of life.
                <br />
                <span className="PandC-s1-gridDiv2-text3">
                  Click on the button to join our community
                </span>
              </div>
              <div className="PandC-s1-gridDiv2-ButtonDiv">
                {/* <span class="material-symbols-outlined PandCButton">diversity_1</span> */}
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
