import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({text, route}) => {
  return (
    <li className='nav-item'>
      <NavLink className='nav-link navlink px-4' to={route}>{text}</NavLink>
    </li>
  )
}

export default Link