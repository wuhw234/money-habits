import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginButton = () => {
  return (
    <li className='nav-item'>
    <button className='btn'>
      <NavLink className='nav-link navlink px-3' to='/login'>Log In</NavLink>
    </button>
  </li>
  )
}

export default LoginButton