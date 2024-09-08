import React from 'react'
import './components.css'

function Navigation() {
  return (
    <>
    <nav>
        <div className="logo"><h2>Blogger</h2></div>
        <ul>
            <li>SIGN UP</li>
            <li>SIGN IN</li>
        </ul>
    </nav>
    <div className="conatiner">
        <h1>Your Stories, Our Platform</h1>
        <h6>Share your unique perspective with us</h6>
        <a href="#">CREATE YOUR BLOG</a>
     </div>
    </>
  )
}

export default Navigation