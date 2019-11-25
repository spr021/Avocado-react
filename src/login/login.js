import React from 'react'
import logo from '../login/logo2.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
            <TextField className='email-login' id='outlined-required' label='E-mail' variant='outlined' />
          </div>
          <div>
            <TextField className='password-login' id='outlined-password-input' label='Password' type='password' autoComplete='current-password' variant='outlined' />
          </div>
          <div className='signInButton'>
            <Link to='/im/'><Button className='button-login' variant='contained' color='primary'>Sing in</Button></Link>
            <div className='forgotText'>
              <Link className='forgotPassword' to='/forgot-password/'>Forgot Password?</Link>
              <div>Don't have an account?<Link className='signUpLink' to='/sign-up/'> Sign up</Link></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login
