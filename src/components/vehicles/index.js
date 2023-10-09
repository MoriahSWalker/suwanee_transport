import React from 'react'
import "./style.css"
import mercedes from '../../assets/images/mercedes.png'
import cadilac from '../../assets/images/cadilac.png'

const Vehicles = () => {
  return (
    <section className='vehicles-section'>
        <p className='header-p'>VEHICLES</p>
        <div className='cards-container'> <div className='vehicles-card' id='card_1'>
            <p className='passenger-number'>
                4
            </p>
            <div className='seperator'></div>
            <p className='passenger-word'>Passenger</p>
            <img src={ mercedes } ></img>
            <p className='car-make-model'>2020 Mercedes Benz S560</p>
        </div>
        <div className='vehicles-card' id='card_2'>
            <p className='passenger-number'>
                6
            </p>
            <div className='seperator'></div>
            <p className='passenger-word'>Passenger</p>
            <img src={ cadilac } ></img>
            <p className='car-make-model'>2021 Cadillac Escalade ESV</p>
        </div>
        </div>


        </section>
  )
}

export default Vehicles