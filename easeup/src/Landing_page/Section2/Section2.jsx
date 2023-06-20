import React from "react";
import "./Section2.css";
import img1 from "../../Images/s2-img1.jpeg";
import img2 from "../../Images/s2-img3.jpeg";

const Section2 = () => {
  return (
    <div className="s2_mainContainer">
      <div className="s2-imgContainer">
        <img src={img2} alt="" srcset="" className="s2-mainImage" />
      </div>
      {/* <div className="s2_gridContainer"> */}
      {/* <div className="s2_gridDiv1">
            <div className="s2_gridDiv1_imgContainer">
                <img className='s2_gridDiv1_img' src={img1} alt="" />
            </div>
            </div> */}
      <div className="s2_gridDiv2">
        <div className="s2_gridDiv2_text">
          Consult a Expert <br /> anytime, anywhere <br /> by{" "}
          <span className="s2_textHighlight">
            <u>one Click</u>{" "}
          </span>
        </div>
        <div className="s2_gridDiv2_text2">
          Describe your feelings to a professional to receive the best guidance
          for your situation.
        </div>
        <div className="s2_gridDiv2_buttonDiv">
          <div className="s2_gridDiv2_button1">Ask a Consultant Online</div>
          <div className="s2_gridDiv2_button2">Unlimited Chat</div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Section2;
