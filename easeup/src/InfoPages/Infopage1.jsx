import React from 'react'
import './Infopage1.css'
import img1 from '../Images/if1.png'

const Infopage1 = () => {
  return (
    <>
    <div className="if1_mainContainer">
    <div className="if1_subContainer">
        <div className="if1_gridContainer">
            <div className="if1_gridsec1">
                <img className='if1-img' src={img1} alt="" />
            </div>
            <div className="if1_gridsec2">
                <div className="if1_textSection">
                    <div className="if1_text1">We're</div>
                    <div className="if1_text2">Reviewing</div>
                    <div className="if1_text3">Your <span className='if1_text4'>Work</span></div>
                
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Infopage1