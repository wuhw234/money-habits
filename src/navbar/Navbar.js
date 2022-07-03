import React from 'react'
import Link from './Link'
import Logo from './Logo'
import Toggle from './Toggle'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light' >
      <div className='container-fluid'>
        <Toggle />
        <Logo text='Money Habits' />
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <Link route='/' text='Home' />
            <Link route='/managehabits' text='Habits' />
            <Link route='/logspending' text='Spending' />
            <Link route='/about' text='About' />
          </ul>
          <ul className='navbar-nav d-flex'>
            <SignupButton />
            <LoginButton />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar