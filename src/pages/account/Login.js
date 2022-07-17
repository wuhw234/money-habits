import React, {useState} from 'react'
import {Link} from "react-router-dom"
import login from './services/loginService'

const Login = ({user, setUser}) => {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  }
  return (
    <div className='container'>
      <div>{errorMessage}</div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label for='username' className='form-label'>Username</label>
        <input 
          id='username' 
          type='username' 
          className='form-control'
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
        <label for='password' className='form-label'>Password</label>
        <input 
          id='password' 
          type='password' 
          className='form-control'
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
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