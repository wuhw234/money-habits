import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div className='container'>
      <h1>Register</h1>
      <form>
        <label for='username' className='form-label'>Username</label>
        <input id='username' type='username' className='form-control'/>
        <label for='password' className='form-label'>Password</label>
        <input id='password' type='password' className='form-control'/>
        <label for='confirmPassword' className='form-label'>Confirm Password</label>
        <input id='confirmPassword' type='password' className='form-control'/>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      <Link to='/login'>Already Have an Account</Link>
    </div>
  )
}

export default Signup