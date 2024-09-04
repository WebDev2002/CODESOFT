import React from 'react'
import './pages.css'

function NotFound() {
  return (
    <div className="not-found-container">
    <h1 className="not-found-title">404</h1>
    <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
    <a href="/" className="home-link">Go Back to Home</a>
  </div>
  )
}

export default NotFound