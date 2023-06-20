import React from "react";
import "./plus.css";
// import './plus2.js'

const Plus = () => {
  var j = 0;
  // console.log(i);
  function expand() {
    var i = document.getElementById("menu").childNodes;
    if (j === 0) {
      document.getElementById("add").style.transform = "rotate(45deg)";
      document.getElementById("menu").style.transform = "scale(1)";
      i[0].style.transform = "translateY(-50px)";
      i[1].style.transform = "translateY(-100px)";
      i[2].style.transform = "translateY(-150px)";
      j = 1;
    } else {
      document.getElementById("add").style.transform = "rotate(0deg)";
      document.getElementById("menu").style.transform = "scale(0.9)";
      i[0].style.transform = "translateY(0)";
      i[1].style.transform = "translateY(0)";
      i[2].style.transform = "translateY(0)";
      j = 0;
    }
  }

  return (
    <>
      <div className="p_mainContainer" onClick={expand}>
        <div className="p_toggle" id="toggle">
          <span className="material-symbols-outlined" id="add">
            add
          </span>
        </div>
      </div>
      <div className="p_menu" id="menu">
        <div className="p_menu-item">
          <a href="#">
            <span className="material-symbols-outlined" id="item-svg">
              mail
            </span>
          </a>
        </div>
        <div className="p_menu-item">
          <a href="#">
            <span class="material-symbols-outlined" id="item-svg">
              call
            </span>
          </a>
        </div>
        <div className="p_menu-item">
          <a href="#">
            <span class="material-symbols-outlined" id="item-svg">
              mark_unread_chat_alt
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Plus;
