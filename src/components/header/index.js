import React from 'react'
import "./style.css"
import Navbar from '../nav'


const Header = () => {
  return (
    <div className='hero-section' id='home'>
        <Navbar />
        <div className='hero-content'>
            <h1>SUWANEE TRANSPORT SERVICES</h1>
            
            <p>State Of Georgia Certified MCA #9131</p>

            <ul className='descriptive-words'>
                <li className='descriptive-li'>RELIABLE</li>
                <li className='descriptive-li'>INTEGRITY</li>
                <li className='descriptive-li'>COURTEOUS</li>
                <li className='descriptive-li'>PROFESSIONAL</li>
            </ul>
            <button className='primary-btn'>Book A Ride</button>
        </div>

    </div>
  )
}

export default Header