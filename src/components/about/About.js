import React from 'react'
import"./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about_img' alt='about image'></img>
            <img src={play_icon} alt='about image' className='play-icon' onClick={()=>{setPlayState(true)}}></img>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing  Tomorrow'a Leaders Today</h2>
            <p>Our cutting-edge curriculam and experiences needed to excel in the dynamic fiels to educationOur cutting-edge curriculam is designed to empower students with the knowledge , skills , and experiences needed to excel in the dynamic fiels to education
            </p>
            <p>
            Our cutting-edge curriculam skills , and experiences needed to excel in the dynamic fiels to educationOur cutting-edge curriculam is designed to empower students with the knowledge , skills , and experiences needed to excel in the dynamic fiels to education
            </p>
            <p>
            Our cutting-edge curriculam is designed excel in the dynamic fiels to educationOur cutting-edge curriculam is designed to empower students with the knowledge , skills , and experiences needed to excel in the dynamic fiels to education
        
            </p>
        </div>
    </div>
  )
}

export default About