import React from 'react'
import "./style.css"

const About = () => {
  return (
    <section className='about-section' id='about'>
        <p id='why_p'>
            Why Choose Us?
        </p>
        <div className='about-divider'></div>
        <p id='experience_p'>
            EXPERIENCE THE DIFFERENCE
        </p>
        <button>Book A Ride</button>
        <div className='about-cards-section'>
            <div className='about-card' id='card_1'>
                <p className='about-header-p'>
                    Luxury Vehicles
                </p>
                <p className='description-p'>
                    Our top of the line vehicle will arrive spotless and stocked with complimentary refreshments.
                </p>
            </div>
            <div className='about-card' id='card_2'>
                <p className='about-header-p'>
                    Available 24/7
                </p>
                <p className='description-p'>
                    We are available for bookings at any time and provide a private and discreet experience.
                </p>
            </div>
            <div className='about-card' id='card_3'>
                <p className='about-header-p'>
                    Instant Online Booking
                </p>
                <p className='description-p'>
                    Book your rides conveniently online using out state of the art booking tool.
                </p>
            </div>

        </div>
        <p className='notice-p'>12 HOUR NOTICE IS RECOMMENDED TO ENSURE AVAILABILITY</p>
    </section>
  )
}

export default About