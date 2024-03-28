import React from 'react'

export default function AdminLogin() {
  return (
    <main className="contact-form" id="contactForm">
    <div className="form-container">
      <h1 className="form-title">Admin Login</h1>
      <form id="contactFormForm">
        <div className="form-group">
          <label className="form-label" htmlFor="subject">
            Username
          </label>
          <input
            className="form-input"
            id="subject"
            placeholder="Username"
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
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <p className="error" />
        <div className="form-actions">
          <button className="form-button1">Login</button>
        </div>
      </form>
    </div>
  </main>  
  )
}
