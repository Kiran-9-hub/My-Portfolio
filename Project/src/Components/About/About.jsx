import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import abc_img from '../../assets/abc_img.avif'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        
      </div>
      <div className="about_sections">
      <div className="about_left">
       <img src={abc_img} alt="" />
      </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a skilled Full-stack Developer with a keen eye for design and a deep understanding of user experience. I specialize in transforming ideas into visually appealing 
                    and responsive web applications using modern web technologies. My focus is on writing clean, efficient code that ensures seamless functionality across devices, 
                    creating a smooth and engaging experience for users. Passionate about continuous learning, I stay updated with the latest trends to bring innovative solutions to every project.</p>
                <p>My passion for Full-stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about_skill"><p>REACT JS</p><hr style={{width:"95%"}} /></div>
                <div className="about_skill"><p>NODE JS</p><hr style={{width:"70%"}} /></div>
                <div className="about_skill"><p>EXPRESS JS</p><hr style={{width:"60%"}} /></div>
                <div className="about_skill"><p>JAVASCRIPT</p><hr style={{width:"85%"}} /></div>
                <div className="about_skill"><p>MONGODB</p><hr style={{width:"95%"}} /></div>
                <div className="about_skill"><p>HTML</p><hr style={{width:"75%"}} /></div>
                <div className="about_skill"><p>CSS</p><hr style={{width:"75%"}} /></div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Passionate About Learning</h1>
            <p>With a strong foundation in Frontend development, I am always eager to learn and
              explore new technologies and trends to enhance my skills and stay ahead in the industry.</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Project Enthusiast</h1>
           <p>I am passionate about taking on new challenges and working on projects that allow me to grow
            and improve my skills, while also delivering high-quality results that meet and exceed expectations.</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Eager to Collaborate</h1>
           <p>I am excited about the opportunity to collaborate with like-minded individuals and teams to
            create innovative solutions and push the boundaries of what is possible in Frontend development.</p>
        </div>
      </div>
    </div>
  )
}

export default About
