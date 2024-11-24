import React from 'react'
import './Hero.css'
import kiran_img from '../../assets/kiran_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={kiran_img} alt="" />
      <h1> <span>I'm Kiran,</span> Frontend developer </h1>
      <p>
      Creative and detail-oriented Frontend Developer with a passion for crafting intuitive user interfaces and enhancing web experiences. Proficient in modern web technologies, I bring designs to life with clean, responsive, and efficient code.</p>
      <div className="hero-action">
        <button className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
        {/* <div className="hero-resume"> <a href="./kirankumar_cv1.pdf" download >My resume</a></div> */}
        
            <button className='hero-resume' ><a href="./Kiran_resume.pdf" download >My resume</a></button>

      </div>
    </div>
  )
}

export default Hero
