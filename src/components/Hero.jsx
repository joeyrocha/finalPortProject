import React from 'react'
import Guy from '/src/assets/images/Guy_Mesa de trabajo 1.png'


export default function() {
  return (
    <div className='hero'>
                
        <div className='hero-content'>
            <h1>Nice to meet you!<br/> I'm <span className='underline'>Joey Rocha.</span></h1>
            <p>Based in San Franciscos Bay Area, I'm a fullstack developer passionate about building  web apps that users love.</p>
            <button>Contact Me</button>
        </div>
        <div className='side-image'>
            <img src={Guy} alt="side image" />
        </div>
    </div>
  )
}
