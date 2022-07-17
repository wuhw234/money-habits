import React, {useState} from 'react'
import {Link} from "react-router-dom"
import signup from './services/signupService'

const Signup = () => {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      const user = await signup({
        username, password,
      })
      setUsername('')
      setPassword('')
      console.log(user)
    } catch (exception) {
      setErrorMessage('Username already in use')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  return (
    <div className='container'>
      <h1>Register</h1>
      <form onSubmit={handleSignup}>
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
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      <Link to='/login'>Already Have an Account</Link>
    </div>
  )
}

export default Signup