import React from 'react'
import Cu_Section1 from './Section1/Cu_Section1'
import Cu_Section2 from './Section2/Cu_Section2'
// import Footer2 from '../../Components/Footer2/Footer2'
import Footer from '../Landing_page/Footer/Footer'
import NavBar from '../Components/Navbar'
const ContactUs = () => {
  return (
   <>
   <NavBar/>
    <Cu_Section1/>
    <Cu_Section2/>
    <Footer/>
    {/* <Footer2/> */}
   </>
  )
}

export default ContactUs