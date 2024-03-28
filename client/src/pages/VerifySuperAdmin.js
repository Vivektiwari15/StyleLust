import React from 'react'

export default function VerifySuperAdmin() {
  return (
    <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Verify Otp</h1>
    <form id="contactFormForm">
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Verify Otp
        </label>
        <input
          className="form-input"
          id="subject"
          placeholder="otp"
          autoComplete="off"
        />
      </div>
      <p className="error" />
      <div className="form-actions">
        <button className="form-button">Verify</button>
      </div>
    </form>
  </div>
</main>
  )
}
