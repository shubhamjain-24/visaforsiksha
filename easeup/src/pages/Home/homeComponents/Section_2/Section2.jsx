import React from "react";
import "./section2.css";
import img1 from "../../../../Images/section2-img1.png";
import {useSpring, animated} from 'react-spring';

function Number({n}){
  const {number} = useSpring({
    from:{number:0},
    number:n,
    delay:200,
    config:{mass:1 , tension:20 ,friction:10},
  })
  return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const Section2 = () => {
  return (
    <>
      <div className="section2_mainContainer">
        <div className="section2_grid">
          <div className="s2_sec1">
            <div className="s2_textDiv">
              <p className="s2_headText1">WELCOME TO SOPIFY</p>
              <p className="s2_headText2">
                Aiding in fulfilling <br className="br" /> dreams for the
                <br className="br" /> past 3 years.
              </p>
              <p className="s2_text">
                Helping Students Create a Better Future.
              </p>
              <div className="s2_NumbersDiv">
                <div className="s2_nd1">
                  <div
                  className="s2_movingNumberDiv">

                  <Number n ={6}/>K+
                  </div>
                  <p className="s2_nd1_text">DRAFTS</p>
                </div>
                
                <div className="s2_vertical"></div>
                <div className="s2_nd2">
                  <p className="s2_text">
                    Drafted various unique SOP's, LOR's, <br className="br" />
                    and Assignments for the students.
                  </p>
                </div>
              </div>
              <div className="s2_NumbersDiv">
                <div className="s2_nd1">
                <div
                  className="s2_movingNumberDiv">

                  <Number n ={3}/>K+
                  </div>
                  <p className="s2_nd1_text">STUDENTS</p>
                </div>
                <div className="s2_vertical"></div>
                <div className="s2_nd2">
                  <p className="s2_text">
                    Provided Services to 3,000 + students living across the
                    globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s2_sec2">
            <img className="s2_img" src={img1} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
