import React from "react";
import "./LinkSection.css";
import MeetFooter from "./MeetFooter";
function LinkSection({ setMeetInfoPopup, peerId }) {
  return (
    <>
      <div className="vcs2-meeting-info-block">
        <div className="vcs2-meeting-header">
          <h3>Your meeting is ready</h3>
          <i
            className="fa-solid fa-xmark vcs2-icon"
            onClick={() => {
              setMeetInfoPopup(false);
            }}
          />
        </div>
        <div className="vcs2-meet-link">
          <span>{peerId}</span>
          <i
            className="fa-solid fa-copy vcs2-icon"
            onClick={() => navigator.clipboard.writeText(peerId)}
          ></i>
        </div>
        <p className="vcs2-info-text">
          or share this meeting link with others you want int the meeting
        </p>
        <button className="vcs2-add-people-btn">
          <i className="fa-solid fa-user vcs2-icon"></i>
          Add Others
        </button>
        <div className="vsc2-permission-text">
          <i className="fa-solid fa-shield-halved vcs2-icon"></i>
          <p className="vcs2-small-text">
            People who use this meeting link must get your permission before
            they can join
          </p>
        </div>
        <p className="vcs2-small-text">Joined as xyz</p>
      </div>
    </>
  );
}

export default LinkSection;
