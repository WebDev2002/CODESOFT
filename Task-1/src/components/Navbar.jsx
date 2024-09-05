import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './components.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav>
      <div className="logo">
        <h1>PortFolio.</h1>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='/about' onClick={toggleMenu}>About</Link></li>
        <li><Link to='/Skill' onClick={toggleMenu}>Skill</Link></li>
        <li><Link to='/Project' onClick={toggleMenu}>Project</Link></li>
        <li><Link to='/Contact' onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar