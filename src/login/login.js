import React from 'react'
import logo from '../login/logo2.png'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

class Login extends React.Component {
  render () {
    return (
      <>
        <div className='loginLogo'><img src={logo} /></div>
        <div className='loginBox'>
          <div className='signInText'>
            <p>Sign in</p>
            <p>Please enter your email address and password.</p>
          </div>
          <div className='username'>
            <input type='email' />
          </div>
          <div className='password'>
            <input type='password' />
          </div>
          <div className='signInButton'>
            <Link className='signInLink' to='/im/'>Sign in</Link>
            <div className='forgotText'>
              <p>Forgot Password?</p>
              <p>Don't have an account? Sign up</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login
