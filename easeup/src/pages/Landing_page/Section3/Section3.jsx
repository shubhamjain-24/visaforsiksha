import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <>
      <div className="s3-mainContaier">
        <div className="s3-headContainer">
          <div className="s3-heading">
            Why you shoulf trust us? <br />
            Get Know about us
          </div>
        </div>
        <div className="s3-gridContainer">
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span class="material-symbols-outlined icon" style={{color:"#b34c66"}}>cognition</span>
            </div>
            <div className="s3-gridDiv1-text">
                <div className="s3-gridDiv1-Text1">
                    All Specialist
                </div>
                <div className="s3-gridDiv1-Text2">
                You can communicate with a wide variety of people who have diverse areas of expertise.
                </div>
            </div>
          </div>
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span class="material-symbols-outlined icon"style={{color:"#ffab21"}}>Private_connectivity</span>
            </div>
            <div className="s3-gridDiv1-text">
                <div className="s3-gridDiv1-Text1">
                    Secure
                </div>
                <div className="s3-gridDiv1-Text2">
                All of your information is secure with us, and all of your discussions are encrypted.
                </div>
            </div>
          </div>
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span class="material-symbols-outlined icon" style={{color:"#87d44a"}}>reviews</span>
            </div>
            <div className="s3-gridDiv1-text">
                <div className="s3-gridDiv1-Text1">
                    Feedback
                </div>
                <div className="s3-gridDiv1-Text2">
                95% of our prior users have provided us with positive comments, and our initiative has received favourable reviews.
                </div>
            </div>
          </div>
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span class="material-symbols-outlined icon"style={{color:"#72569d"}}>forum</span>
            </div>
            <div className="s3-gridDiv1-text">
                <div className="s3-gridDiv1-Text1">
                   Chat Support
                </div>
                <div className="s3-gridDiv1-Text2">
                On our platform, we offer the chat and meet features for convenient contact.
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Section3;
