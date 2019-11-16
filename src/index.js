import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login/login'
import Container from './index/container'
import SignUp from './signup/signUp'
import ForgotPassword from './forgotPassword/forgotPassword'
import './index/components/styles.scss'
import './login/styles.scss'
import * as serviceWorker from './serviceWorker'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/im/'>
            <Container />
          </Route>
          <Route path='/sign-up/'>
            <SignUp />
          </Route>
          <Route path='/forgot-password/'>
            <ForgotPassword />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>

    )
  }
}

// <Login />
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
