import React from 'react'
import ProjectDeatils from '../projectDeatils/ProjectDetails'
import Footer from '../components/Footer'

function Project() {
  return (
    <>
    <section className='project-section'>
    <h1>Project</h1>
        <div className="projects">
        {ProjectDeatils.map((project, index)=>(
          <div key={index} className="project-box">
             <div className="thumbnail">{project.img}</div>
             <div className="details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="btn btn-primary">Source Code</a>
             </div>
          </div>
        ))}
        
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Project