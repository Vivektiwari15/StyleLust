import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <main class="contact-form" id="contactForm">
    <div class="form-container">
      <h1 class="form-title">Forgot Password</h1>
      <form id="contactFormForm">
        <div class="form-group">
          <label class="form-label" for="subject">Username/Email</label>
          <input class="form-input" id="subject" placeholder="Username or Email" autocomplete="off" />
        </div>
        <p class="error"></p>
        <div class="form-actions">
            <button class="form-button">Send Otp</button>
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
  )
}
