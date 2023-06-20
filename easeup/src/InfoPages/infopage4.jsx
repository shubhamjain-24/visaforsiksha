import React from 'react'
import img1 from "../Images/if4.png";
import "./infopage4.css";
const infopage4 = () => {
  return (
    <> <div className="if4_mainContainer">
    <div className="if4_subContainer">
      <div className="if4_gridContainer">
        <div className="if4_gridsec1">
          <div className="if4_textSection">
            <div className="if4_text1">
                Submit a new task
              </div>
          </div>
        </div>
        <div className="if4_gridsec2">
          <img className="if3-img" src={img1} alt="" />
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default infopage4