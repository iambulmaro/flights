import React from 'react'
import '../styles/Header.css'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='headerContainer'>
          <Link to='/'><img src={require('../images/comtrago.png')} width='200px' height='50px' alt='img' /> </Link>
        <div className='funcContainer'>
          <NavLink to='#' exact={true}  className='functions'>Stay</NavLink>
          <NavLink to='#' exact={true}  className='functions'>Drive</NavLink>  
        </div>
          <div className='authContainer'>
          <NavLink to='/signup' exact={true} activeClassName='is-active' className='auth'>Signup</NavLink>
          <NavLink to='/login' exact={true} activeClassName='is-active' className='auth'>Log In</NavLink>
          </div>
        </div>
    )
}

export default Header
