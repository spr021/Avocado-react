import React from 'react'
import { connect } from 'react-redux'
import MyMsg from './myChat'
import YourMsg from './yourChat'

class ChatBox extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='chat-text' id='chat-text'>
        <div id='chating'>
          {this.props.nickName === '' ? <p className='select-chat'>Please select a chat to start messaging</p> : ''}
          {console.log('AAAAAAAAAAA', this.props.chatText)}
          {this.props.chatText.map((obj) => {
            return (obj.id === 1 ? <MyMsg text={obj.pm} /> : <YourMsg text={obj.pm} />)
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chatText: state.massageList,
  nickName: state.name
})

export default connect(mapStateToProps)(ChatBox)
