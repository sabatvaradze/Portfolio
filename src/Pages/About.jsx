import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='about-cont'>
      <div className='about-content'>

        <div>
          <h1 className='colored-text'>About me</h1>
          <h1>Hey there! I'm <span className='colored-span'>Saba Tvaradze</span>,
           a passionate React developer with a knack for crafting captivating 
            front-end experiences. With a background in web development and a love 
            for all things design, I thrive on turning 
          ideas into reality, one line of code at a time.</h1>
        </div>

        <div>
          <h1 className='colored-text'>Skills</h1>
          <h1>Proficient in <span className='colored-span'>React, HTML, CSS, ES6, 
          TypeScript, and JavaScript</span> ,
           with a strong grasp of responsive design principles. Skilled in crafting
            engaging user interfaces 
           using <span className='colored-span'>Material UI</span> , ensuring seamless user 
           experiences across devices. Experienced in writing clean, efficient code and comfortable 
           working with various front-end technologies. Passionate about creating visually 
            appealing and user-friendly web applications.</h1>
        </div>
        <div>
          <h1>
          <h1 className='colored-text'>Goal</h1>

          As a junior developer, my primary goal is 
          to deepen my understanding of web development
           principles and technologies. I aspire to gain practical
            experience in building robust and user-friendly applications 
            while continuously expanding my skill set. Additionally, I aim to 
            collaborate with experienced professionals to learn best
           practices and refine my problem-solving abilities.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About