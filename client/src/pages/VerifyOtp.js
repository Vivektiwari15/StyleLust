import React, { useState } from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

export default function VerifyOtp() {

  const [verifyData,setverifyData] = useState({otp:""})
  const [errorMsg,setErrorMsg] = useState("")

  const navigate = useNavigate()

  const handleOtp = async(e)=>{
  
    e.preventDefault();
    setErrorMsg("")

    const token = localStorage.getItem("authToken")
    const {otp} = verifyData
    const response = await fetch(`${process.env.REACT_APP_API}/api/auth/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authToken":token
      },
      body: JSON.stringify({otp}),
    });

    const json = await response.json();
    if(!json.success){
      return setErrorMsg(json.message)
    }  

    navigate('/home')
  
  }
  const handleonChange = (e)=>{
    setverifyData({ ...verifyData, [e.target.name]: e.target.value })
  }
  
  return (
    <main className="contact-form" id="contactForm">
    <div className="form-container">
      <h1 className="form-title">Verify Otp</h1>
      <form id="contactFormForm" onSubmit={handleOtp}>
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
            value={verifyData.otp}
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
