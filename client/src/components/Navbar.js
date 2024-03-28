import React from 'react'
import '../styles/navbar.css'
import Logo from '../images/Logo/Logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();


  return (
   <>
    <header className="bg-black text-white flex items-center justify-between px-8 py-4">
  <div className="menus">
    <img className="Logo" src={Logo} width="150px" alt="Logo" srcSet="" onClick={()=>navigate('/')} />
    <nav className="flex mt-2 space-x-9 font-medium">
      <Link to='/home' className="hover:text-gray-300">
        Home
      </Link>
      <Link className="hover:text-gray-300">
        About
      </Link>
      <Link to='/contactus' className="hover:text-gray-300">
        Contact Us 
      </Link>
    </nav>
  </div>
  <div className="btns">
    <button id="btn-login" onClick={()=>navigate('/login')}>Login</button>
    <button id="btn-signup" onClick={()=>navigate('/signup')}>Signup</button>
  </div>
</header>
   </>
  )
}
