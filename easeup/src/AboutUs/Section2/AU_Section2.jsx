import React from 'react'
import './AU_section2.css'
import img1 from '../../Images/aboutUs-img22.png'

const AU_Section2 = () => {
  return (
    <>
    <div className="AU_section2_mainContainer">
    <div className="AU_section2_gridContainer">
      <div className="AU_section2_gridContainerDiv">
        <div className="AU_section2_gridContainerDiv_text">

        <p className='AU_section2_gridContainerDiv_text_Para'> <span style={{fontWeight:"bold"}}>Ease Up is a one-of-a-kind startup. &nbsp;</span> 
        
        Our mission at Ease Up is to provide a supportive and informative platform for individuals seeking mental health healing and self-improvement. We believe that mental health is just as important as physical health and that everyone deserves to live a happy, healthy life.
        <br />
        <br />
        We strive to remove the stigma surrounding mental health and provide a safe, welcoming space for individuals to explore their feelings, share their experiences, and find helpful resources.
        <br />
        <br />
        Our website features a variety of content, including articles, videos, and podcasts, all aimed at educating and empowering individuals to take control of their mental health. We also offer a directory of mental health professionals, including therapists, psychiatrists, and support groups, to help individuals find the right help for their specific needs.
        <br />
        <br />
        In addition to providing information and resources, we also strive to create a sense of community. We offer a forum for individuals to connect with others who are also on their journey towards mental health healing. We believe that support and understanding from others who have experienced similar struggles can be an invaluable part of the healing process.
        <br />
        <br />
        Overall, our mission is to create a comprehensive, supportive platform that empowers individuals to take charge of their mental health and live their best lives.
        </p>
        </div>
      </div>
      <div className="AU_section2_gridContainerDiv">
        <img className='AU_section2_gridContainerDiv-img' src={img1} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default AU_Section2