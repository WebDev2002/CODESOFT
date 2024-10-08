import React from 'react'
import './pages.css'
import { useNavigate} from 'react-router-dom'

function Contact() {
  const navigation = useNavigate();

  const handel = (event) =>{
    event.preventDefault();

    navigation('/')
  }
  return (
    <>
    <section className="contact">
      <h1>Contact Us</h1>
      <form action="" method="post" onSubmit={handel} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
    </>
  )
}

export default Contact