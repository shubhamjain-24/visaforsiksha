import React from "react";
import "./lor.css";
import Navbar from "../../components/Navbar/Navbar";
import LOR_section1 from "./Section1/LOR_section1";
import LOR_section2 from "./Section2/LOR_section2";
import Footer2 from "../../components/Footer2/Footer2";

const LOR = () => {
  return (
    <>
      <Navbar />
      <LOR_section1 />
      <LOR_section2 />
      <Footer2 />
    </>
  );
};

export default LOR;
