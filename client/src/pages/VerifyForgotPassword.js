import React, { useState } from 'react'

export default function VerifyForgotPassword() {

  const [otpData, setotpData] = useState({otp:""})
  const [errorMsg, setErrorMsg] = useState("")

  const handleonChange = (e)=>{

    setotpData({...otpData, [e.target.name]: e.target.value })

  }


  return (
    <main className="contact-form" id="contactForm">
    <div className="form-container">
      <h1 className="form-title">Verify Otp</h1>
      <form id="contactFormForm" >
        <div className="form-group">
          <label className="form-label" htmlFor="subject">
            Verify Otp
          </label>
          <input
            name='otp'
            className="form-input"
            id="subject"
            placeholder="otp"
            autoComplete="off"
            value={otpData.otp}
            onChange={handleonChange}

          />
        </div>
        <p className="error">{errorMsg}</p>
        <div className="form-actions">
        <input type='submit' className="form-button" value='Verify'/>
        </div>
      </form>
    </div>
  </main>  
  )
}
