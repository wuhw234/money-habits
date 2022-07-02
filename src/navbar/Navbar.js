import React from 'react'
import { NavLink } from 'react-router-dom';

import Link from './Link'
import Logo from './Logo'
import Toggle from './Toggle'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Toggle />
        <Logo text='Money Habits' />
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <Link route='/' text='Home' />
            <Link route='/habits' text='Habits' />
            <Link route='/goals' text='Goals' />
            <Link route='/about' text='About' />
          </ul>
          <ul className='navbar-nav d-flex'>
            <Link route='/signup' text='Sign Up' />
            <Link route='/login' text='Log In' /> 
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar