import React from "react";
import "./MeetFooter.css";
function MeetFooter() {
  return (
    <div>
      <div className="vcs3-footer-item">
        <div className="vcs3-left-item">
          <div className="vcs3-icon-block">
            Meeting details
            <i className="fa-solid fa-angle-up vcs3-icon"></i>
          </div>
        </div>
        <div className="vcs3-center-item">
          <div className="vcs3-icon-block">
            <i className="fa-solid fa-microphone vcs3-icon"></i>
          </div>
          <div className="vcs3-icon-block">
            <i className="red fa-solid fa-phone"></i>
          </div>
          <div className="vcs3-icon-block">
            <i className="fa-solid fa-video vcs3-icon"></i>
          </div>
        </div>
        <div className="vcs3-right-item">
          <div className="vcs3-icon-block">
            <i className="fa-solid fa-closed-captioning"></i>
            <p className="vcs3-title">Turn on Captions</p>
          </div>
          <div className="vcs3-icon-block">
            <i className="fa-solid fa-desktop"></i>
            <p className="vcs3-title">Present Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetFooter;
