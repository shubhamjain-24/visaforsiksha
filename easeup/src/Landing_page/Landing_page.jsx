import React from "react";
import NavBar from "../components/Navbar";
import Section2 from "./Section2/Section2";

import Footer from "./Footer/Footer";
import Navigation from "../components/Navigation";
import HomeBoot from "./Section2/HomeBoot";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
const Landing_page = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Navigation />
      {/* <Section2 /> */}
      <HomeBoot />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
};

export default Landing_page;
