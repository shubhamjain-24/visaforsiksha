import React from "react";
import "./AU_section2.css";
import img1 from "../../../Images/aboutUs-img2.png";

const AU_Section2 = () => {
  return (
    <>
      <div className="AU_section2_mainContainer">
        <div className="AU_section2_gridContainer">
          <div className="AU_section2_gridContainerDiv1">
            <div className="AU_section2_gridContainerDiv_text">
              <p>
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  SOPify is a one-of-a-kind startup. &nbsp;
                </span>
                SOPify is by the student for the students’ startup where we help
                young aspirants achieve their life goals by getting them
                admitted to the universities they desire. The Foundation stone
                for this company was laid while I was doing my MBA from NMIMS,
                Mumbai. At that time, this was just a means for me to help
                students and get some part-time income to support my expenses.
                <br />
                <br />
                This desire to help students grew as I started receiving
                messages of gratitude from students. It was an overwhelming
                feeling, which took me on a journey to create an impact. I soon
                realized that this is a considerable gap that many students and
                consultants face, and since that day, I have been on a path to
                fill this gap.
                <br />
                <br />
                Starting with Statement of Purpose, SOPify now helps students
                with their letters of Recommendation, Assignments, and CA
                Valuation. In the long run, I envisage offering end-to-end
                services to students to make their lives easier. Starting as a
                one-man army, today we are a team of over 40 employees. SOPify
                now operates through the Cloud Office model, where everyone
                gives their inputs and contribution from the comfort of their
                homes.
              </p>
            </div>
          </div>
          <div className="AU_section2_gridContainerDiv2">
            <img
              className="AU_section2_gridContainerDiv-img"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AU_Section2;
