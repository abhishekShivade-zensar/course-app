import React, { Fragment } from 'react'
import { ReactComponent as Logo } from '../../asset/header/coding-cloud.svg'
import './header.styles.css'
import { Link, Outlet } from 'react-router-dom'

 const Header = () => {
    return (
        <Fragment>
            <div className='header-container' >
                <div className='logo-div'>
                    <Link to='/' >
                        <Logo className='logo m-s-2' />
                    </Link>
                    <h3>CodingCloud</h3>
                </div>
                <div className='link-div'>
                    <Link className='courses-link' to='/courses'>
                        <h5>Courses</h5>
                    </Link>
                    <Link className='about-link' to='/about'>
                        <h5>About Us</h5>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Header