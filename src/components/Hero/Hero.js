import React from 'react'
import "./Hero.css"
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculam is designed to empower students 
           with the knowledge , skills , and experiences needed to 
           excel in the dynamic fiels to education
        </p>
        <button className='btn'>Explore More <img src={arrow} alt='arrow'></img></button>

      </div>

        
    </div>
  )
}

export default Hero