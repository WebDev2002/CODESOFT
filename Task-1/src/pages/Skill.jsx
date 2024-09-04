import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./Project";

function Skill() {
  return (
    <> 
    <section className="skill-section">
    <h1>Skill</h1>
    <div className="bars">
      <div>
        <h5>HTML & CSS</h5>     
        <ProgressBar variant='danger' now={95} label={`${95}%`}/>
        </div>
      <div>
        <h5>JAVASCRIPT</h5>
        <ProgressBar variant='warning' now={80} label={`${80}%`} />
        </div>
      <div>
        <h5>REACTJS</h5>
        <ProgressBar variant='info' now={80} label={`${80}%`} />
        </div>
      <div>
        <h5>NODEJS</h5>
        <ProgressBar variant="success" now={75} label={`${75}%`} />
        </div>
      <div>
        <h5>EXPRESS</h5>
        <ProgressBar variant='warning' now={75} label={`${75}%`} />
        </div>
    <div>
        <h5>MONGODB</h5>
        <ProgressBar variant="success" now={75} label={`${75}%`} />
        </div>
    </div>
  </section>
  <Project />
  </>
  )
}

export default Skill