import React from "react";
import img1 from "../Images/if22.png";
import "./Infopage2.css";
const Infopage2 = () => {
  return (
    <>
      <div className="if2_mainContainer">
        <div className="if2_subContainer">
          <div className="if2_gridContainer">
            <div className="if2_gridsec1">
              <div className="if2_textSection">
                <div className="if2_text1">
                  <span className="if2_sp1">oops ! </span>
                  Your work has <span className="if2_sp2">not </span>been
                  accepted.
                </div>
              </div>
                <div className="if2_reviewSection">
                <div className="if2_text2">Description</div>
                <div className="if2_text3">
                Correct the mistake: Depending on the severity of the mistake, you may need to amend the document or create a new one altogether. Correct the mistake: Depending on the severity of the mistake, you may need to amend the document or create a new one altogether. 
                </div>
                </div>
            </div>
            <div className="if2_gridsec2">
              <img className="if3-img" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infopage2;
