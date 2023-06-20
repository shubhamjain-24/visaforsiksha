import React from "react";
import "./AU_section4.css";
import { useSpring, animated } from "react-spring";

function Number1({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const AU_Section4 = () => {
  return (
    <>
      <div className="AU_section4_mainContainer">
        <div className="AU_section4_gridContainer">
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
                <div className="AU_section4_gridContainerDivText1">
                  <Number1 n={3} />+
                </div>
              <div className="AU_section4_gridContainerDivText2">
                Years of Experience
              </div>
            </div>
          </div>
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
                <div className="AU_section4_gridContainerDivText1">
                  <Number1 n={3000} />+
                </div>
              <div className="AU_section4_gridContainerDivText2">
                Happy Clients
              </div>
            </div>
          </div>
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
                <div className="AU_section4_gridContainerDivText1">
                  <Number1 n={6000} />+
                </div>
              <div className="AU_section4_gridContainerDivText2">
                Documents Drafted
              </div>
            </div>
          </div>
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
                <div className="AU_section4_gridContainerDivText1">
                  <Number1 n={18} />+
                </div>
              <div className="AU_section4_gridContainerDivText2">
                Countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AU_Section4;
