import React from 'react'
import Header from '../../components/header'
import Services from '../../components/services'
import Vehicles from '../../components/vehicles'
import About from '../../components/about'
// import Navbar from '../../components/nav'
import Contact from '../../components/contact'

const LandingPage = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Header />
        <Services />
        <Vehicles />
        <About />
        <Contact />

    </>
  )
}

export default LandingPage