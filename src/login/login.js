import React from 'react'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

class Login extends React.Component {
  render () {
    return (
      <div className='loginBox'>
        <div className='signInText'>
          <p>Sign in</p>
          <p>Please enter your email and password.</p>
        </div>
        <div className='username'>
          <input type='email' />
        </div>
        <div className='password'>
          <input type='password' />
        </div>
        <div className='signInButton'><Link className='signInLink' to='/im/'>Sign in</Link></div>
      </div>
    )
  }
}

export default Login
