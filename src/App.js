import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/program/Program'
import Title from './components/title/Title'
import About  from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Video from './components/videoplayer/Video'

const App = () => {
  
    const[playState,setPlayState]=useState(false)


  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subtitle="Our PROGRAM" title="What We Offer "/>
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subtitle="Gallery" title="Campus Phoyod"/>
      <Campus/>
      <Title subtitle="TESTIMONIALS" title="What student says"/>
      <Testimonials/>
      <Title subtitle="Contact US" title="Get in touch"/>
      <Contact/>
      <Footer/>
      </div>
     <Video playState={playState} setPlayState={setPlayState}/>
     </div>
  )
}

export default App