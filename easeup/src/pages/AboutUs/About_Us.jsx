import React from "react";
import AU_Section1 from "./Section1/AU_Section1";
import AU_Section2 from "./Section2/AU_Section2";
import AU_Section3 from "./Section3/AU_Section3";
import AU_Section4 from "./Section4/AU_Section4";
import AU_Section5 from "./Section5/AU_Section5";
import Footer2 from "../../components/Footer2/Footer2";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AU_Section1 />
      <AU_Section2 />
      <AU_Section3 />
      <AU_Section4 />
      <AU_Section5 />
      <Footer2 />
    </>
  );
};

export default AboutUs;
