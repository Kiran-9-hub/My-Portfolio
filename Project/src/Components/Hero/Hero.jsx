import React from 'react';
import './Hero.css';
import kiran_img from '../../assets/kiran_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={kiran_img} alt="Kiran Kumar" />
      <h1>
        <span>I'm Kiran,</span>
        <div className="animated-title">
          {"MERN full-stack developer".split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </h1>
      <p>
        Creative and detail-oriented Full-Stack Developer with a passion for building seamless web applications and enhancing user experiences. Proficient in modern web technologies across both frontend and backend, I craft intuitive interfaces and robust server-side architectures. With a focus on clean, responsive, and efficient code, I bring designs to life while ensuring scalable and reliable solutions.
      </p>
      <div className="hero-action">
        <button className="hero-connect">
          <a href="https://www.linkedin.com/in/kirankumarsahoo/" target='_blank'>LinkedIn Profile</a>
        </button>
        <button className="hero-resume">
          <a href="./public/Kiran_resume2025.pdf" download>
            My resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
