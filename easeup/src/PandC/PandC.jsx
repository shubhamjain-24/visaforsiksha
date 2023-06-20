import React from "react";
// import NavBar from '../Components/Navbar'
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Footer from "../Landing_page/Footer/Footer";
import Navigation from "../components/Navigation";

const PandC = () => {
  return (
    <>
      {/* <NavBar/> */}
      <Navigation />
      <Section1 />
      <Section3 />
      <Section2 />
      <Footer />
    </>
  );
};

export default PandC;
