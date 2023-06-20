import React from "react";
import "./Assignment_section2.css";
import img1 from "../../../Images/Assignment-sec2-img1.jpg";
import img2 from "../../../Images/LOR-s2img2.jpeg";
import { NavLink } from "react-router-dom";
const Assignment_section2 = () => {
  return (
    <>
      <div className="Assignment_s2-mainContainer">
        <div className="Assignment_s2-gridContainer">
          <div className="Assignment_s2-gridDiv1">
            <div className="Assignment_s2-gridDiv1-imgDiv">
              <img className="Assignment_s2-gridDiv1-img" src={img1} alt="" />
            </div>
            <div className="Assignment_s2-gridDiv1-Head">Assignment</div>
            <div className="Assignment_s2-gridDiv1-Text">
              We offer supreme quality assignments to complete your application
              process. The assignments are done in various subjects. The
              subjects offered and their assignments are thoroughly researched
              and well planned. The structure of the assignments is taken into
              consideration as per the requirement of the University. Getting
              your assignments drafted by us will give you the benefit of prior
              experience. You can solely work on your applications while we take
              care of researching and drafting the assignment to fulfill your
              dream of studying abroad.
            </div>
            <div className="Assignment_s2-gridDiv1-Text">
              Our writers specialize in the subjects given below and more. They
              ensure top-notch quality of assignments along with 100% authentic
              information. The writers have expertise in conducting in-depth
              research on the relevant topic.
            </div>
            <div className="Assignment_s2-gridDiv1-Text">
              Our prior experience gives us an upper edge as we understand the
              current standards of the assignments to be produced but also
              understand the quality expected by universities. To name a few, we
              offer assignments in the following subjects
            </div>
            {/* LIST 1 */}
            <div className="Assignment_s2-gridDiv1-listDiv">
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>A. Marketing</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>B. Accounts</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>C. Statistics</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>D. Finance</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>E. HR</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>F. IT</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>G. Math</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                and many more
              </div>
            </div>
            <div className="Assignment_s2-gridDiv1-Text">
              Get your assignments drafted by us for
            </div>

            {/* LIST 2 */}
            <div className="Assignment_s2-gridDiv1-listDiv">
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Top-notch quality</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>100% Authentic</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Thoroughly Researched</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Well Structured</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>University Approved Standards</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Experienced and Well-informed Writers</b>
              </div>
            </div>
          </div>
          {/* DIV 2 */}
          <div className="Assignment_s2-gridDiv2">
            <div className="Assignment_s2-gridDiv2-mainContainer">
              <div className="Assignment_s2-gridDiv2-mainContainer-headContainer">
                <div className="Assignment_s2-gridDiv2-mainContainer-head">
                  Apply Now
                </div>
                <div className="Assignment_s2-gridDiv2-mainContainer-Text">
                  Please fill all your information correctly to get an idea
                  about your proper requirement.
                </div>
                <a href="/RegisterUser">
                  <div className="Assignment_s2-gridDiv2-mainContainer-button">
                    Assignment Form
                  </div>
                </a>
              </div>
            </div>
            <NavLink className="Navlink" to="/lor">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainButton2">
                LOR: Letter of Recommendation
                <span class="material-symbols-outlined arrow-symbol-LOR">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/assignment">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainButton">
                Assignment
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/sop">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainButton2">
                SOP: Statement of Purpose
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>

            {/* <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-imgDiv">
                <img
                  className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-img"
                  src={img2}
                  alt=""
                />
                <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-callIconDiv">
                  <span class="material-symbols-outlined LOR-callIcon">
                    call
                  </span>
                </div>
                <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text">
                  Have any Questions? Call us Now !
                </div>
                <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                  +91 70165 22535
                </div>
              </div>
            </div> */}

            <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2">
              <span class="material-symbols-outlined LOR-callIcon">call</span>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text">
                Have any Questions? Call us Now !
              </div>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                +91 70165 22535
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment_section2;
