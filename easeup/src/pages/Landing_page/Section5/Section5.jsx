import React from 'react'
import './Section5.css'
import icon1 from '../../Images/s5-icon1.png'
import icon2 from '../../Images/s5-icon2.png'
import icon3 from '../../Images/s5-icon3.png'
import icon4 from '../../Images/s5-icon4.png'
import icon5 from '../../Images/s5-icon5.png'
import icon6 from '../../Images/s5-icon6.png'
import icon7 from '../../Images/s5-icon7.png'
import icon8 from '../../Images/s5-icon8.png'

const Section5 = () => {
  return (
    <>
    <div className="s5-mainContaier">
      <div className="s5-headContainer">
        <div className="s5-heading">
          Our Cosulting specialities
        </div>
        <div className="s5-heading2">
          Ask a doctor online and get quick medical advice for your health queries. Our medical panel consists 
          <br /> of over 3500+ doctors from 80+ specialities.
        </div>
      </div>
      <div className="s5-gridContainer">
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img  className='s5-icon'  src={icon1} alt="" />
            
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Addiction
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon' src={icon2} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Adolescent 
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon' src={icon3} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Forensic 
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon' src={icon4} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Geriatric 
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon' src={icon5} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Neuropsychiatry
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon'  src={icon6} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Occupational 
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon' src={icon7} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Psychosomatic 
              </div>
          </div>
        </div>
        <div className="s5-gridDiv1">
          <div className="s5-gridDiv1-icon">
            {/* <span class="material-symbols-outlined icons5">home</span> */}
            <img className='s5-icon' src={icon8} alt="" />
          </div>
          <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">
              Cross-cultural 
              </div>
          </div>
        </div>
        
      </div>
    </div>
  </>
  )
}

export default Section5