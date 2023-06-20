import React from "react";
import img from "./Images/chD.png";
import Navigation from "./components/Navigation";
import { Link } from "react-router-dom";
const CheckerMainboard = () => {
  return (
    <>
      <Navigation />
      <div style={{ height: "50rem", marginTop: "-6rem" }}>
        <img src={img} style={{ height: "100%" }} alt="" />
        <button
          style={{
            height: "4rem",
            width: "15rem",
            marginTop: "-21rem",
            position: "absolute",
            backgroundColor: "#2d3867",
            padding: "1rem 1rem",
            color: "white",
            marginLeft: "3rem",
            borderRadius: "30px",
            fontSize: "20px",
          }}
        >
          <Link to="/Checkertable">Get Started</Link>
        </button>
      </div>
    </>
  );
};

export default CheckerMainboard;
