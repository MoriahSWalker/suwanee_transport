import React from 'react'
import "./style.css"

const Services = () => {
  return (
    <div className='services-section'>
        <p className='services-p'>SERVICES</p>
        <h2 className='services-h2'>THE BEST IN VIP GROUND SERVICES</h2>
        <div className='cards-section'>
            <div className='card-image' id='airport_card'>               
                <p className='card-p'>Airport Transfer</p>
            </div>
            <div className='card-image' id='weddings_card'>               
                <p className='card-p'>Weddings</p>
            </div>
            <div className='card-image' id='corporate_card'>               
                <p className='card-p'>Corporate</p>
            </div>
            <div className='card-image' id='parties_card'>               
                <p className='card-p'>Parties</p>
            </div>
        </div>
    </div>
  )
}

export default Services