import React from 'react'
// import { Outlet } from 'react-router-dom'
import '../../asset/about-page/library.jpg'
// import Header from '../header/header.component'
import './about-page.styles.css'

export const AboutPage = () => {
  return (
    <div className='about-container'>
      {/* <Header/> */}
      <img src={require('../../asset/about-page/library.jpg')} />
      <h1>Free Library For Coders</h1>
      <p>
        CodingCloud is an online library of free eCourses.<br /><br />
        CodingCloud was the first provider of free electronic courses, or eCourses.Michael Hart, founder of CodingCloud, invented eCourses in 1971 and his memory continues to inspire the creation of eCourses and related content today.
      </p>
    </div>
  )
}
