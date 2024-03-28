import React from 'react'
import '../styles/home.css'
import outtfit1 from '../images/outfits/1.png'
import outtfit2 from '../images/outfits/2.png'
import outtfit3 from '../images/outfits/3.png'
import eyeIcon from '../images/miscellaneous/eyeIcon.png'
import Navbar from '../components/Navbar'

export default function UserDashboard() {
  return (
   <>
   <Navbar/>
    <div className="container">
  <div className="square" style={{ backgroundImage: `url(${outtfit1})` }}>
    <div className="heart" id="colorBtn" />
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit2})` }}>
    <div className="heart" id="colorBtn" />
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit3})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (4).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit2})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (2).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit3})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (2).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit1})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (4).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit3})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (2).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit1})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (2).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit2})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (4).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
     
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
  <div className="square" style={{ backgroundImage: `url(${outtfit1})` }}>
    <div>
      <button className="like-btn">
        <img src="social media logo/heart (4).png" width="30px" alt='' />
      </button>
    </div>
    <button className="view">
      <img
        src={eyeIcon}
        alt=''
        className="eye-icon"
      />
      View
    </button>
  </div>
</div>

   </>
  )
}
