import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Lottie from 'react-lottie'
import animationData from './avocado.json'
import { withRouter } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

function Login () {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  function handleClick () {
    setLoading(true)
    axios.post('http://click.7grid.ir/auth/signin/', {
      email: email,
      password: password
    })
      .then((response) => {
        console.log('CCCCCCCCC', response.data)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('/im/')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <div className='loginLogo'> <Lottie options={defaultOptions} height={70} width={70} /></div>
      <div className='loginBox'>
        <div className='signInText'>
          <p>Sign in</p>
          <p>Please enter your email address and password.</p>
        </div>
        <div>
          <TextField onChange={(event) => setEmail(event.target.value)} className='email-login' id='outlined-required' label='E-mail' variant='outlined' />
        </div>
        <div>
          <TextField onChange={(event) => setPassword(event.target.value)} className='password-login' id='outlined-password-input' label='Password' type='password' autoComplete='current-password' variant='outlined' />
        </div>
        <div className='progress-bar'>
          {loading === true ? <CircularProgress /> : ''}
        </div>
        <div className='signInButton'>
          {/* <Link to='/im/'> */}<Button onClick={() => handleClick()} className='button-login' variant='contained' color='primary'>Sing in</Button>{/* </Link> */}
          <div className='forgotText'>
            <Link className='forgotPassword' to='/forgot-password/'>Forgot Password?</Link>
            <div>Don't have an account?<Link className='signUpLink' to='/sign-up/'> Sign up</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
