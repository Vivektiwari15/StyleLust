import React, { useState } from 'react'
import '../styles/signup.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

  const navigate = useNavigate()

  const [signupData,setsignupData] = useState({username:"",email:"",password:""})
  const [errorMsg,setErrorMsg] = useState("")


  const handleSignup = async(event)=>{
    event.preventDefault();
    setErrorMsg("")
    const {username,email,password } = signupData;
    const response = await fetch(`${process.env.REACT_APP_API}auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username,email,password}),
    });

    const json = await response.json();
    if(!json.success){
      return setErrorMsg(json.message)
    }  
    await localStorage.setItem("authToken",json.authToken)
    navigate('/verifyotp') 
  }

  const handleonChange = (e)=>{
    setsignupData({ ...signupData, [e.target.name]: e.target.value })
  }

  return (
   <>
    <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Signup</h1>
    <form id="contactFormForm" onSubmit={handleSignup}>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Username
        </label>
        <input
          name='username'
          className="form-input"
          id="subject"
          placeholder="example"
          autoComplete="off"
          value={signupData.username}
          onChange={handleonChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Email
        </label>
        <input
        name='email'
          className="form-input"
          id="subject"
          placeholder="example.@gmail.com"
          autoComplete="off"
          value={signupData.email}
          onChange={handleonChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Password
        </label>
        <input
        name='password'
          className="form-input"
          id="subject"
          placeholder="......."
          autoComplete="off"
          value={signupData.password}
          onChange={handleonChange}
        />
      </div>
      <p className="error">{errorMsg}</p>
      <div className="form-actions">
        <input type='submit' className="form-button" value='Signup'/>
      </div>
    </form>
  </div>
  <br />
  <p className="Gobacktopage">
    Already a user?<Link to='/login' className="gbpg" onClick={handleSignup} >Login</Link>
  </p>
  <p className="Gobacktopage">
    ←<Link to='/home' className="gbpg">Go back to home</Link>
  </p>
</main>

   </>
  )
}
