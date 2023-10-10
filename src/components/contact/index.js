import React from 'react'
import "./style.css"
import { FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
        <div className='footer-title'>
            <h3>Suwanee Transport Services</h3>
        </div>
        <div className='contact-info'>
            <h4>Contact</h4>
            <p><FaPhoneVolume /> 770-623-1317</p>
            <p><MdEmail /> suwaneetransport@gmail.com </p>
        </div>
        
    </section>
  )
}

export default Contact