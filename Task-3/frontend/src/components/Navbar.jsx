import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'

function Navbar() {
  return (
<>
  <nav>
    <div className="logo">
      <h1>Blogger</h1>
    </div>
    <ul className="nav-links">
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>
  </nav>
</>

  )
}

export default Navbar