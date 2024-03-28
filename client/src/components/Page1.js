import React, { useState } from 'react'
import '../styles/Page1.css'
import carousel1 from '../images/carousel/carousel1.jpg'
import rightArrow from '../images/miscellaneous/right arrow.png'
import leftArrow from '../images/miscellaneous/left arrow.png'
import { useNavigate } from 'react-router-dom'

export default function Page1() {

    const navigate = useNavigate();

        const [currentSlide, setCurrentSlide] = useState(0);
      
        const changeSlide = (direction) => {
          const totalSlides = document.querySelectorAll('.carousel-item').length;
      
          let newSlide = currentSlide + direction;
      
          if (newSlide < 0) {
            newSlide = totalSlides - 1;
          } else if (newSlide >= totalSlides) {
            newSlide = 0;
          }
      
          setCurrentSlide(newSlide);
      
          const translateValue = -newSlide * 100 + '%';
          const carousel = document.querySelector('.carousel');
          carousel.style.transform = `translateX(${translateValue})`;
        }; 

  return (
   <>
    <div className="carousel-container">
    <div className="carousel">
        <div className="carousel-item">
            <img src={carousel1} alt=''  className="carousel-img"/>
        </div>
        <div className="carousel-item">
            <img src={carousel1} alt=''  className="carousel-img"/>
        </div>
        <div className="carousel-item">
            <img src={carousel1} alt='' className="carousel-img"/>
        </div>
    </div>
    <button className="prev-button" onClick={() => changeSlide(-1)} ><img src={leftArrow} alt="" srcSet=''/></button>
    <button className="next-button" onClick={() => changeSlide(1)}><img src={rightArrow} alt="" srcSet=''/></button>
</div>

<button className="view-more" onClick={()=>navigate('/home')} >View more</button>
   </>
  )
}
