import React from 'react'

export default function SuperAdminSignup() {
  return (
    <>
        <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Super Admin Register</h1>
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
          placeholder="Username"
          autoComplete="off"
        />
      </div>
      <p className="error" />
      <div className="form-actions">
        <button className="form-button">Register</button>
      </div>
    </form>
  </div>
</main>

    </>
  )
}
