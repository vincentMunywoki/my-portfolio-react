import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />             </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a tech enthusiast with a strong belief in the transformative power 
                        of technology to shape the future. My journey has led me to explore and 
                        grow my expertise in software development, cloud infrastructure, and UX/UI design, 
                        where I constantly seek new challenges to learn and innovate. I embrace each day as 
                        an opportunity to build meaningful solutions and expand my skills in the tech industry</p>
                    <p>
                    My passion for front-end development drives me to create visually engaging and user-friendly web experiences. 
                    I'm constantly exploring new design trends and best practices to ensure my projects stand out and meet user needs effectively.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>My Skills </p></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
