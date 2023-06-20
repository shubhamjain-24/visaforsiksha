import React from "react";
import "./B_section2.css";
import img1 from "../../Images/blogP1.jpeg";
import img2 from "../../Images/blogP2.jpg";
import img3 from "../../Images/blogP3.jpg";
import img4 from "../../Images/blogP4.jpg";

const B_Section2 = () => {
  return (
    <>
      <div className="B_section2_mainContainer">
        <div className="B_section2_gridContainer">
            {/* CARD 1 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img1} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                Elizabeth Keohan, LCSW-C
              </div>
              <p className="B_section2_headText">
              Social Anxiety in Teens: Signs & Symptoms
              </p>
              <p className="B_section2_headTextPara">
              While it’s something that can affect anyone, at any age, social anxiety disorder in teens is something we need to talk about....
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img2} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
               unknown
              </div>
              <p className="B_section2_headText">
              Schizophrenia: Symptoms, Causes, and Treatment
              </p>
              <p className="B_section2_headTextPara">
              Schizophrenia is an often misunderstood chronic brain disorder....
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img3} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                Tamar Sidi
              </div>
              <p className="B_section2_headText">
              What is the Mental Health Impact of Losing Your Sense of Smell and Taste from COVID-19?
              </p>
              <p className="B_section2_headTextPara">
              Our five senses — sight, hearing, touch, smell, and taste — connect us with the world. From the sight of a distant sunset over emerald waters...
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img4} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                unknown
              </div>
              <p className="B_section2_headText">
              why people are scared to reveal about their mental health
              </p>
              <p className="B_section2_headTextPara">
              It is completely understandable to be scared of sharing personal information about your mental health with others...
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default B_Section2;
