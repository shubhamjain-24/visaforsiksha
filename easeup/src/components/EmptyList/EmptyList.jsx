import React from "react";
import "./EmptyList.css";
import img1 from "../../Images/noresult.jpeg";

const EmptyList = () => {
  return (
    <div className="EmptyList-wrap">
      <img src={img1} alt="empty" />
    </div>
  );
};

export default EmptyList;
