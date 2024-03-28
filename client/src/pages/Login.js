import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Login</h1>
    <form id="contactFormForm">
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Username/Email
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="Username or Email"
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
          placeholder="password"
          autoComplete="off"
        />
      </div>
      <p className="msg">Don't remember password?</p>
      <Link className="msgs">forgot password</Link>
      <p className="error" />
      <div className="form-actions">
        <button className="form-button">Login</button>
      </div>
    </form>
  </div>
  <br />
  <p className="Gobacktopage">
    Don't have account?<Link to='/signup' className="gbpg">signup</Link>
  </p>
  <p className="Gobacktopage">
    ←<Link to='/home' className="gbpg">Go back to home</Link>
  </p>
</main>

    </>
  )
}
