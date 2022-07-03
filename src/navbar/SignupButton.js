import React from 'react'
import { NavLink } from 'react-router-dom'

const SignupButton = () => {
  return (
    <li className='nav-item'>
      <button className='btn btn-outline-primary'>
        <NavLink className='nav-link navlink px-3' to='/signup'>Sign Up</NavLink>
      </button>
    </li>
  )
}

export default SignupButton