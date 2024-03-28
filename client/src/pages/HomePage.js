import React from 'react'
import Navbar from '../components/Navbar'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Footer from '../components/Footer'
// import Page3 from '../components/Page3'

export default function HomePage() {
  return (
   <>
    <Navbar/>
    <Page1/>
    <Page2/>
    {/* <Page3/> */}
    <Footer/>
   </>
  )
}
