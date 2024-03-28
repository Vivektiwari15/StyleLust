import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/contact.css'

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div id='formContainer'>
    <main className="contact-form" id="contactForm">
    <div className="form-container">
      <h1 className="form-title">Contact us</h1>
      <form id="contactFormForm">
        <div className="form-group">
          <label className="form-label" htmlFor="subject">Email</label>
          <input className="form-input" id="subject" placeholder="example.@gmail.com" autoComplete="off" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="description">Description</label>
          <textarea className="form-textarea" placeholder="Breif about your problem..." id="description" autoComplete="off"></textarea>
        </div>
        <div className="form-actions">
          <button className="form-button">Submit</button>
        </div>
      </form>
    </div>
  </main>
  </div>
    </>
  )
}
