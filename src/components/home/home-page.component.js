import React, { Fragment } from 'react'
import './home-page.styles.css'
import { Outlet } from 'react-router'
import Header from '../header/header.component'

export const HomePage = () => {
  const HelloCoder = '<> HelloCoder </>'
  return (
    <div>
      {/* <Outlet/> */}
      {/* <Header /> */}
      <div className='home-page-container' >
        
        <h1 className='greet' >{HelloCoder}</h1>
      </div>
    </div>
  )
}
