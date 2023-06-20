import React from "react";
import "./section4.css";

const Section4 = () => {
  return (
    <>
      <div className="s4-mainContainer">
        <div className="s4-headDiv">
          <div className="s4-headDiv-mainText">Why Choose Us?</div>
          <div className="s4-headDiv-Text">
            Because we understand what you want and because we offer some of the
            greatest facilities, choosing us will allow you to benefit from the
            expertise of our professionals.
          </div>
        </div>
        <div className="s4-div2">
          <div className="s4-div2-grid">

            {/* div 1 */}
            <div className="s4-div2-grid_div1">
                <span
                  class="material-symbols-outlined s4-icon"
                  style={{ color: "#d82f30" }}
                >
                  verified_user
                </span>
              <div className="div-text">Zero Plagiarised Content</div>
              <div className="div-text2">We offer authentic material that is authored by our skilled writers from scratch.</div>
            </div>

             {/* div 2 */}
            <div className="s4-div2-grid_div1">
                <span
                  class="material-symbols-outlined s4-icon"
                  style={{ color: "#d82f30" }}
                >
                  draft
                </span>
              <div className="div-text">Original Drafts</div>
              <div className="div-text2">Since they are created and produced in our studio, all of our draughts are entirely original.</div>
            </div>

            {/* div 3 */}
            <div className="s4-div2-grid_div1">
                <span
                  class="material-symbols-outlined s4-icon"
                  style={{ color: "#d82f30" }}
                >
                 local_shipping 
                </span>
              <div className="div-text">Delivered in 24 hours</div>
              <div className="div-text2">We have the capability of providing your draught in less than 24 hours.</div>
            </div>

            {/* div 4 */}
            <div className="s4-div2-grid_div1">
                <span
                  class="material-symbols-outlined s4-icon"
                  style={{ color: "#d82f30" }}
                >
                  published_with_changes
                </span>
              <div className="div-text">Customized as per your liking with changes</div>
              <div className="div-text2">We also allow our users to modify the document in accordance with their requirements.</div>
            </div>
            {/* div 5 */}
            <div className="s4-div2-grid_div1">
                <span
                  class="material-symbols-outlined s4-icon"
                  style={{ color: "#d82f30" }}
                >
                  badge
                </span>
              <div className="div-text">Professional Quality</div>
              <div className="div-text2">We deliver content of a high standard, and all of our draughts are written by experts.</div>
            </div>

            {/* div 6 */}
            <div className="s4-div2-grid_div1">
                <span
                  class="material-symbols-outlined s4-icon"
                  style={{ color: "#d82f30" }}
                >
                  drive_file_rename_outline
                </span>
              <div className="div-text">Drafted in impeccable English</div>
              <div className="div-text2">Our draughts have excellent linguistic quality.</div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
