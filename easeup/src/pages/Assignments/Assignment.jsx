import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Assignment_section1 from "./Section1/Assignment_section1";
import Assignment_section2 from "./Section2/Assignment_section2";
import Footer2 from "../../components/Footer2/Footer2";
const Assignment = () => {
  return (
    <>
      <Navbar />
      <Assignment_section1 />
      <Assignment_section2 />
      <Footer2 />
    </>
  );
};

export default Assignment;
