import React from "react";
import SOP_section1 from "./Section1/SOP_section1";
import SOP_section2 from "./Section2/SOP_section2";
import Footer2 from "../../components/Footer2/Footer2";
import Navbar from "../../components/Navbar/Navbar";
const SOP = () => {
  return (
    <>
      <Navbar />
      <SOP_section1 />
      <SOP_section2 />
      <Footer2 />
    </>
  );
};

export default SOP;
