import React from 'react'

export default function UpdatePassword() {
  return (
    <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Update password</h1>
    <form id="contactFormForm">
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          New Password
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="Password"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Retype Password
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="retype Password"
          autoComplete="off"
        />
      </div>
      <p className="error" />
      <div className="form-actions">
        <button className="form-button">Update Password</button>
      </div>
    </form>
  </div>
</main>
  )
}
