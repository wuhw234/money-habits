import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/habits'>Habits</NavLink>
      </li> 
      <li>
        <NavLink to='/signup'>Signup</NavLink>
      </li>
    </>
  )
}

export default Navbar