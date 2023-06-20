import React from "react";
import "./LOR_section2.css";
import img1 from "../../../Images/LOR-s2img1.jpg";
import img2 from "../../../Images/LOR-s2img2.jpeg";
import { NavLink } from "react-router-dom";

const LOR_section2 = () => {
  return (
    <>
      <div className="LOR_s2-mainContainer">
        <div className="LOR_s2-gridContainer">
          <div className="LOR_s2-gridDiv1">
            <div className="LOR_s2-gridDiv1-imgDiv">
              <img className="LOR_s2-gridDiv1-img" src={img1} alt="" />
            </div>
            <div className="LOR_s2-gridDiv1-Head">
              LOR: Letter Of Recommendation
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              Letter of Recommendation acts as an aide to your Statement of
              Purpose. It supports your Statement of Purpose by insights into
              your performance, projects, and personality. The Letter of
              Recommendation is signed and validated by your teachers,
              professors, mentors, and managers. Letter of Recommendation is
              both for <b>Educational</b> and <b>Professional </b> Professional
              Reasons. Correct recommendations lead to strengthening your
              application. The LoR has to correctly state your performance,
              accomplishments, and strengths in a way that does justice to your
              actual performance. We draft professional LoRs to highlight your
              mettle.
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              Teachers often are unable to articulate the feats of the student.
              Also, the sources are not justified at times to validate the
              content.
            </div>
            <div className="LOR_s2-gridDiv1-head-Text">
              Educational Letter of Recommendation
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              It is drafted to apply to educational institutions. An Educational
              LoR involves getting recommendations signed by teachers in school
              and professors in college. You need to decide which feats would
              strengthen your application and are worthy to be included in the
              LoR.
              <br />
              <b>Rates: ₹1000/- | US$ 15.00</b> View Sample
            </div>
            <div className="LOR_s2-gridDiv1-head-Text">
              Professional Letter of Recommendation
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              A professional LoR is drafted to gain a better position in your
              professional tenure or shift jobs. It involves highlighting
              achievements that do justice to the job profile that you are
              applying to.
              <br />
              <b>Rates: ₹1000/- | US$ 15.00 </b> View Sample
            </div>
          </div>
          <div className="LOR_s2-gridDiv2">
            <div className="LOR_s2-gridDiv2-mainContainer">
              <div className="LOR_s2-gridDiv2-mainContainer-headContainer">
                <div className="LOR_s2-gridDiv2-mainContainer-head">
                  Apply Now
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-Text">
                  Please fill all your information correctly to get an idea
                  about your proper requirement.
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-Text">
                  Chose from the below buttons to choose your LOR type Academic
                  or Professional
                </div>

                {/* <div className="LOR_s2-gridDiv2-mainContainer-button">
                  <div className="LOR_s2-gridDiv2-mainContainer-button-span1">
                    Academic
                  </div>
                  <div className="LOR_s2-gridDiv2-mainContainer-button-span2">
                    Professional
                  </div> */}
                  {/* <div className="LOR_s2-gridDiv2-mainContainer-button-span3">
                    OR
                  </div> */}
                {/* </div> */}
              </div>
            </div>
            <NavLink className="Navlink" to='/lor'>

            <div className="LOR_s2-gridDiv2-mainContainer-mainButton">
              LOR: Letter of Recommendation
              <span class="material-symbols-outlined arrow-symbol-LOR">
                chevron_right
              </span>
            </div>
            </NavLink>
            <NavLink className="Navlink" to='/assignment'>

            <div className="LOR_s2-gridDiv2-mainContainer-mainButton2">
              Assignment
              <span class="material-symbols-outlined arrow-symbol-LOR2">
                chevron_right
              </span>
            </div>
            </NavLink>
            <NavLink className="Navlink" to='/sop'>

            <div className="LOR_s2-gridDiv2-mainContainer-mainButton2">
              SOP: Statement of Purpose
              <span class="material-symbols-outlined arrow-symbol-LOR2">
                chevron_right
              </span>
            </div>
            </NavLink>
            {/* <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2">
              <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-imgDiv">
                
                <img
                  className="LOR_s2-gridDiv2-mainContainer-mainDiv2-img"
                  src={img2}
                  alt=""
                />
                <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-callIconDiv">
                <span class="material-symbols-outlined LOR-callIcon" >call</span>
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text">
                  Have any Questions?  Call us Now !
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                +91 70165 22535
                </div>
              </div>
            </div> */}
            <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2">
              <span class="material-symbols-outlined LOR-callIcon">call</span>
              <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text">
                Have any Questions? Call us Now !
              </div>
              <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                +91 70165 22535
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LOR_section2;
