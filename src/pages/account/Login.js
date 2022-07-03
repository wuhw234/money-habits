import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='container'>
      <h1>Log In</h1>
      <form>
        <label for='email' className='form-label'>Email</label>
        <input id='email' type='email' className='form-control'/>
        <label for='password' className='form-label'>Password</label>
        <input id='password' type='password' className='form-control'/>
        <div class="form-check">
          <label class="form-check-label" for="checkRemember">Remember me</label>
          <input class="form-check-input" type="checkbox" id="checkRemember" />
        </div>
        <button type="submit" class="btn btn-primary">Log In</button>
      </form>
      <Link to='/signup'>Need An Account?</Link>
    </div>
  )
}

export default Login