import React from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
   <>
    <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Signup</h1>
    <form id="contactFormForm">
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Username
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="example"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Email
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="example.@gmail.com"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Password
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="......."
          autoComplete="off"
        />
      </div>
      <p className="error" />
      <div className="form-actions">
        <button className="form-button">Login</button>
      </div>
    </form>
  </div>
  <br />
  <p className="Gobacktopage">
    Already a user?<Link to='/login' className="gbpg">Login</Link>
  </p>
  <p className="Gobacktopage">
    ←<Link to='/home' className="gbpg">Go back to home</Link>
  </p>
</main>

   </>
  )
}
