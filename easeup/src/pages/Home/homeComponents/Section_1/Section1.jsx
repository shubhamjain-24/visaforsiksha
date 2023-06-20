import React from "react";
import "./section1.css";
import video from "../../../../Video/done.mp4";

const Section1 = () => {
  return (
    <>
      <div className="s1_mainContainer">
        <video className="s1-video" src={video} autoPlay loop muted />
        {/* <div className="content">
            <h1>thank you for chossing us</h1>
        </div> */}
      </div>
    </>
  );
};

export default Section1;
