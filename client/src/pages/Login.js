import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  
  const [loginData,setloginData] = useState({identifier:"",password:""})
  const [errorMsg,setErrorMsg] = useState("")

  const navigate = useNavigate()


  const handleLogin = async(event)=>{
    event.preventDefault();
    setErrorMsg("")
    
    const {identifier,password } = loginData;
    const response = await fetch(`${process.env.REACT_APP_API}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({identifier,password}),
    });

    const json = await response.json();
    console.log(json)
    if(!json.success){
      console.log(json.message)
      return setErrorMsg(json.message)
    }
    localStorage.setItem("authToken",json.authToken)
    navigate('/home') 
  }


  const handleonChange = (e)=>{
    setloginData({ ...loginData, [e.target.name]: e.target.value })
  }


  useEffect(()=>{

    const fetchUser = async(token)=>{
        const response = await fetch(`${process.env.REACT_APP_API}/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authToken":token
          }
        });
    
        console.log(response)
        const json = await response.json();
        if(json.success){
          navigate('/home') 

        }
      }

      const token  = localStorage.getItem("authToken")  
      if(token){
        console.log(token)
        fetchUser(token)
      }


  })

  return (
    <>
    <main className="contact-form" id="contactForm">
  <div className="form-container">
    <h1 className="form-title">Login</h1>
    <form id="contactFormForm" onSubmit={handleLogin}>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Username/Email
        </label>
        <input
          name='identifier'
          className="form-input"
          id="subject"
          placeholder="Username or Email"
          autoComplete="off"
          value={loginData.identifier}
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
          placeholder="password"
          autoComplete="off"
          value={loginData.password}
          onChange={handleonChange}

        />
      </div>
      <p className="error">{errorMsg}</p>
      <p className="msg">Don't remember password?</p>
      <Link to="/forgotpassew" className="msgs">forgot password</Link> <br/>
      <div className="form-actions"> 
        <input type='submit' className="form-button" value='Login' />
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
