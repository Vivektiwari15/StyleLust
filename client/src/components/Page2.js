import React from 'react'
import '../styles/Page2.css'
import { useNavigate } from 'react-router-dom';

export default function Page2() {
  
  const navigate = useNavigate();

  return (
    <>
    <div className="main-container">
    <div className="circular-element left"></div>
    <div className="circular-element right"></div>

    <h1 className="heading-section">
      How to enhance your Outfit?
    </h1>

    <p className="description-paragraph">
      Add essential accessories and Layering to your Outfit. The result will
      turn your daily outfit into 10X better, We have this Outfits that
      include accessories and jackets chek now....
    </p>

    <button className="explore-button" onClick={()=>navigate('/home')}>
      Explore Now
    </button>
  </div>
    </>
  )
}
