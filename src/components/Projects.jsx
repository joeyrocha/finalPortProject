import React from 'react'

import projects from '/src/data/projects.json'

export default function Projects() {
  return (
    <section className='project-container' id='project'>
      
      <h2 className='project-title'>Projects</h2>
      <div className='projects'>
        {
          projects.map((projects, id) => {
            return <div className='container-logic' key={id}>
              <img src={projects.imageSrc} className='project-image' alt={projects.title} />
            <h3 className='project-titles'>{projects.title}</h3>
            <p className='project-description'>{projects.description}</p>
            <ul className='project-skills'>
              {projects.skills.map((skill,id) => {
                return(<li className='project-skill' key={id}>{skill}</li>)
              })}
            </ul>
            <div className='project-links'>
              <a href={projects.demo} className='project-link' >Demo </a>
              <a href={projects.source} className='project-link'>Source</a>
              
              
            
            </div>
            
            </div>
          })
        }
      </div>
    </section>
  )
}
