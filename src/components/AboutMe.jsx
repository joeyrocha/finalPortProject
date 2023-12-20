import React from 'react'
import ProfilePic from '/src/assets/images/profile.jpg'

export default function AboutMe() {
  return (
    <section className='about'>
      <div className='about-img'>
        <img src={ProfilePic} alt="Profile Picture" className='img'/>
      </div>

      <div className='about-content'>
        <h2 className='about-heading'>About <span>Me</span></h2>
        <h3>Software Developer</h3>
        <p className='about-text'>🚀 Welcome to my digital space! I'm [Your Name], a passionate and creative full-stack developer on a mission to transform ideas into exceptional digital experiences. With a solid foundation in both front-end and back-end technologies, I bring a holistic approach to web development.

🌐 My journey in the world of coding began with a love for problem-solving and a fascination with the endless possibilities of technology. Over the years, I've honed my skills in crafting responsive and user-friendly websites, blending aesthetics with functionality.

💡 From conceptualization to deployment, I thrive on turning innovative concepts into reality. Proficient in languages like JavaScript, HTML, CSS, and experienced in frameworks such as React and Node.js, I am well-equipped to navigate the ever-evolving landscape of web development.</p>
        <button href="#" className='about-button'>Resume</button>
      </div>

    </section>
  )
}
