import React from 'react'
import { connect } from 'react-redux'
// import './styles.scss';
import Account from './account'
import ChatBox from './chatBox'
import WriteBox from './writeBox'

class Chat extends React.Component {
  render () {
    return (
      <div className='chat'>
        <Account />
        <div className='tc-line' />
        <ChatBox />
        {this.props.profile !== '' ? <><div className='tc-line' /><WriteBox /></> : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.name
})

export default connect(mapStateToProps)(Chat)
