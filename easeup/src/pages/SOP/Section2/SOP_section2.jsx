import React from "react";
import img1 from "../../../Images/SOP-s2-img1.jpg";
import img2 from "../../../Images/LOR-s2img2.jpeg";
import "./SOP_section2.css";
import { NavLink } from "react-router-dom";
const SOP_section2 = () => {
  return (
    <>
      <div className="SOP_s2-mainContainer">
        <div className="SOP_s2-gridContainer">
          <div className="SOP_s2-gridDiv1">
            <div className="SOP_s2-gridDiv1-imgDiv">
              <img className="SOP_s2-gridDiv1-img" src={img1} alt="" />
            </div>
            <div className="SOP_s2-gridDiv1-Head">
              SOP: Statement of Purpose
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              Statement of Purpose is the document that states your intentions
              about why you are the right candidate and why should you be
              considered. It has a 90% role in your selection to the program,
              visa, or scholarship. Statement of Purpose can affect your dream
              of getting a foreign education, traveling to a new country, or
              living abroad.
            </div>
            <div className="SOP_s2-gridDiv1-Head2">Why Choose us?</div>
            <div className="SOP_s2-gridDiv1-listDiv">
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Zero Plagiarized Content</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Original Drafts</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Delivered in 24 hours</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Customized as per your liking with changes</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Professional Quality</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Drafted in impeccable English</b>
              </div>
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              There are various kinds of Statement of Purpose that cater to your
              needs
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">1. Student Visa SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              An SOP for a student visa goes to the embassy of the respective
              country. It will testify if the student is appropriate to be sent
              to their country. If it is not correct then despite your selection
              to the program, you will be denied entry into the country making
              the selection null and void. Also, the embassy may ask you to
              block a required sum of money. It ensures that you have enough
              funds to travel to your country if the need arises.
              <br />
              <b>Rates: ₹3000/- | US$ 45.00</b> View Sample
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">2. Tourist Visa SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              Statement of purpose for a tourist visa states the intentions of
              traveling, the health of the applicant, and his/her finances. The
              embassy makes sure that the financial position of the individual
              is such that they are not cash crunching and can return to their
              home country.
              <br />
              <b>Rates: ₹2500/- | US$ 35.00</b> View Sample
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">3. Spouse Visa SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              Getting your spouse to live with you while you are working abroad
              requires a great deal of effort as countries are unwilling to let
              people gain permanent citizenship. The SOP states the existing
              financial position, the duration of the stay, and if you will be
              working too.
              <br />
              <b>Rates: ₹2500/- | US$ 35.00</b> View Sample
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">4. Scholarship SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              AA scholarship SOP completely affects your chances of getting
              financial aid. The SOP lists why you are the perfect candidate to
              get a scholarship and prove to be an asset. Since there are many
              applicants for a scholarship program, it is necessary to frame it
              correctly that highlights your achievements.
              <br />
              <b>Rates: ₹2500/- | US$ 35.00 </b> View Sample
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">5. College SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              A college SOP impacts your acceptance into the University. The SOP
              should state why the program is fit for you and why you chose to
              pursue it, your achievements, and your strengths. Global
              universities have a rigorous screening process. Your effort would
              go astray if your SOP lacks in portraying your potential.
              <br />
              <b>Rates: ₹2500/- | US$ 35.00</b> View Sample
            </div>
          </div>
          <div className="SOP_s2-gridDiv2">
            <div className="SOP_s2-gridDiv2-mainContainer">
              <div className="SOP_s2-gridDiv2-mainContainer-headContainer">
                <div className="SOP_s2-gridDiv2-mainContainer-head">
                  Apply Now
                </div>
                <div className="SOP_s2-gridDiv2-mainContainer-Text">
                  Please fill all your information correctly to get an idea
                  about your proper requirement.
                </div>
                <a href="/RegisterUser">
                  <div className="SOP_s2-gridDiv2-mainContainer-button">
                    SOP FORM
                  </div>
                </a>
              </div>
            </div>
            <NavLink className="Navlink" to="/lor">
              <div className="SOP_s2-gridDiv2-mainContainer-mainButton2">
                LOR: Letter of Recommendation
                <span class="material-symbols-outlined arrow-symbol-LOR">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/assignment">
              <div className="SOP_s2-gridDiv2-mainContainer-mainButton2">
                Assignment
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/sop">
              <div className="SOP_s2-gridDiv2-mainContainer-mainButton">
                SOP: Statement of Purpose
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            {/* <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2">
              <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-imgDiv">
                <img
                  className="SOP_s2-gridDiv2-mainContainer-mainDiv2-img"
                  src={img2}
                  alt=""
                />
                <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-callIconDiv">
                  <span class="material-symbols-outlined LOR-callIcon">
                    call
                  </span>
                </div>
                <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-Text">
                  Have any Questions? Call us Now !
                </div>
                <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                  +91 70165 22535
                </div>
              </div>
            </div> */}

            <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2">
              <span class="material-symbols-outlined LOR-callIcon">call</span>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text SOP_contact1">
                Have any Questions? Call us Now !
              </div>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text2 SOP_contact2">
                +91 70165 22535
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOP_section2;
