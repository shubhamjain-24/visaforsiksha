import React from "react";
import Service_section1 from "./Section1/Service_section1";
import Service_section2 from "./Section2/Service_section2";
import Footer2 from "../../components/Footer2/Footer2";
import Service_section3 from "./Section3/Service_section3";
import Service_section4 from "./Section4/Service_section4";
import Navbar from "../../components/Navbar/Navbar";
const Services = () => {
  return (
    <>
      <Navbar />
      <Service_section1 />
      <Service_section2 />
      <Service_section3 />
      <Service_section4 />
      <Footer2 />
    </>
  );
};

export default Services;
