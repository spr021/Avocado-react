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
          <div>
            <input className='email' type='email' placeholder='E-mail' />
          </div>
          <div>
            <input className='password' type='password' placeholder='Password' />
          </div>
          <div className='signInButton'>
            <Link className='signInLink' to='/im/'>Sign in</Link>
            <div className='forgotText'>
              <Link className='forgotPassword' to='/forgot-password/'>Forgot Password?</Link>
              <div>Don't have an account?<Link className='signUpLink' to='/sign-up/'>Sign up</Link></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login
