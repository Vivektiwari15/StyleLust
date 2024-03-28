import React from 'react'
import '../styles/footer.css'
import Logo from '../images/Logo/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import instagram from '../images/social media icon/instagram.png'
import facebook from '../images/social media icon/facebook.png'
import snapchat from '../images/social media icon/snapchat.png'
import youtube from '../images/social media icon/youtube.png'

export default function Footer() {

  const navigate = useNavigate();

  return (
   <>
    <footer>
  <div className="lists">
    <span id="Logo">
      <img src={Logo} alt="" srcSet="" width="200px" onClick={()=>navigate('/')}/>
    </span>
    <ul className="navigator">
      <li className="navigator-list">
        <Link to='/home' className="menu">
          Home
        </Link>
      </li>
      <li className="navigator-list">
        <Link href="#" className="menu">
          About
        </Link>
      </li>
      <li className="navigator-list">
        <Link to='/contactus' className="menu">
          Contact us
        </Link>
      </li>
    </ul>
    <ul className="navigator">
      <li className="navigator-list">
        <Link to='/login' className="menu">
          Login
        </Link>
      </li>
      <li className="navigator-list">
        <Link to='/signup' className="menu">
          Signup
        </Link>
      </li>
    </ul>
    <ul className="navigator">
      <li className="navigator-list">
        <Link href="#" className="menu">
          Privacy policy
        </Link>
      </li>
      <li className="navigator-list">
        <Link href="#" className="menu">
          Terms and Conditions
        </Link>
      </li>
    </ul>
    <div>
      <br />
      <p className="social-media-title">
        <u>Follow us on social media</u>
      </p>
      <ul className="social-logo">
        <li>
          <Link href="">
            <img
              src={instagram}
              alt=""
              width="50px"
              id="media-logo"
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <img
              src={facebook}
              alt=""
              width="50px"
              id="media-logo"
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <img
              src={youtube}
              alt=""
              width="50px"
              id="media-logo"
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <img
              src={snapchat}
              alt=""
              width="50px"
              id="media-logo"
            />
          </Link>
        </li>
      </ul>
    </div>
  </div>
  <hr />
  <div className="copyrights">
    <p> Copyright 2023 © | All rights reserverd by </p>
    <Link className="home-link" to='/'>
      StyleLust.in
    </Link>
    <br />
  </div>
</footer>
   </>
  )
}
