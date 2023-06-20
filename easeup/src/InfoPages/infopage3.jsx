import React from "react";
import "./infopage3.css";
import img1 from "../Images/if3.png";

const Infopage1 = () => {
  return (
    <>
      <div className="if3_mainContainer">
        <div className="if3_subContainer">
          <div className="if3_gridContainer">
            <div className="if3_gridsec1">
              <img className="if3-img" src={img1} alt="" />
            </div>
            <div className="if3_gridsec2">
              <div className="if3_textSection">
                <div className="if3_text1">Congrats,</div>
                <div className="if3_text2">
                  Your task
                  <br />
                  has been
                </div>
                <div className="if3_text3">
                  approved.
                </div >
                  <div className="if_button">
                    Mark as
                    <br />
                    Completed
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infopage1;
