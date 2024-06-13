import React, { useState } from 'react'
import '../styles/login.css'
import { Link,useNavigate } from 'react-router-dom'

export default function ForgotPassword() {

  const [fgData, setfgData] = useState({identifier:""})
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate()

  const handleFg = async (event)=>{

    event.preventDefault();
    setErrorMsg("")
    
    const {identifier } = fgData;
    const response = await fetch(`${process.env.REACT_APP_API}/api/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({identifier}),
    });

    const json = await response.json();
    console.log(json)
    if(!json.success){
      console.log(json.message)
      return setErrorMsg(json.message)
    }
    localStorage.setItem("ForgotPassword",json.authToken)
    navigate('/forgotpassword/verify') 
    
  }

  const handleonChange =(e)=>{
    setfgData({ ...fgData, [e.target.name]: e.target.value })
  }

  return (
    <main className="contact-form" id="contactForm">
    <div className="form-container">
      <h1 className="form-title">Forgot Password</h1>
      <form id="contactFormForm" onSubmit={handleFg}>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">Username/Email</label>
          <input 
          name='identifier'
          className="form-input" id="subject" placeholder="Username or Email" autoComplete="off"
          value={fgData.identifier}
          onChange={handleonChange}
          />
        </div>
        <p className="error">{errorMsg}</p>
        <div className="form-actions">
        <input type='submit' className="form-button" value='Snd Otp' />
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
