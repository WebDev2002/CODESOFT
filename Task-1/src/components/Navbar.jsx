import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'

function Navbar() {
  return (
    <>
    <nav>
      <div className="logo">
        <h1>PortFolio.</h1>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/Skill'>Skill</Link></li>
        <li><Link to='/Project'>Project</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar