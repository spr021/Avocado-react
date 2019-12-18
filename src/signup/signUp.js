import React from 'react'
import logo from '../login/logo2.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

class SignUp extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: '',
      email: '',
      password: '',
      signUpFaill: false
    }
  }

  handleClick () {
    this.setState({ ...this.state, loading: true })
    axios.post('http://click.7grid.ir/auth/signup/', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        console.log('EEEEE', response)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('/im/')
      })
      .catch(() => {
        this.setState({ ...this.state, signUpFaill: true })
      })
      .finally(() => {
        this.setState({ ...this.state, loading: false })
      })
  }

  render () {
    return (
      <>
        <div className='loginLogo'><img src={logo} /></div>
        <div className='loginBox'>
          <div className='signInText'>
            <p>Sign up</p>
            <p>Please enter your email address and password to create an account.</p>
          </div>
          <div>
            <TextField onChange={(event) => this.setState({ ...this.state, email: event.target.value })} className='email-login' id='outlined-required' label='E-mail' variant='outlined' />
          </div>
          <div>
            <TextField onChange={(event) => this.setState({ ...this.state, password: event.target.value })} className='password-login' id='outlined-password-input' label='Password' type='password' autoComplete='current-password' variant='outlined' />
          </div>
          <div className='progress-bar'>
            {this.state.loading === true ? <CircularProgress /> : ''}
          </div>
          <div className='signInButton'>
            {/* <Link to='/im/'> */}<Button onClick={() => this.handleClick()} className='button-login' variant='contained' color='primary'>Sing up</Button>{/* </Link> */}
            <div className='forgotText'>
              <div> Back to <Link className='signUpLink' to='/'> Sign in</Link></div>
              {this.state.signUpFaill === true ? console.log('this is error') : console.log('this is sucsses')}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SignUp
