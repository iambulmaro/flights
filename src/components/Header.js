import React from 'react'
import '../styles/Header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
      <header>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <NavLink to='/' onClick={() => {window.location.href="/"}}><img src={require('../images/comtrago.png')} width='200px' height='50px' alt='img' /> </NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample09">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item p-2">
                  <NavLink to='/signup' exact={true} activeClassName='is-active' className='btn btn-signup'>Signup</NavLink>
                </li>            
                <li class="nav-item p-2">
                  <NavLink to='/login' exact={true} activeClassName='is-active' className='btn btn-login'>Log In</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

    )
}

export default Header
