import React from 'react'
// import './styles.css';
import MyMsg from './myChat'
import YourMsg from './yourChat'

class ChatBox extends React.Component {
  constructor () {
    super()
    this.state = {
      chatText: [
        {
          id: 1,
          text: 'salam'
        },
        {
          id: 2,
          text: 'rwq'
        },
        {
          id: 3,
          text: 'asf'
        },
        {
          id: 1,
          text: 'vbnk'
        },
        {
          id: 2,
          text: 'tryykgm'
        },
        {
          id: 1,
          text: 'dsfdf'
        },
        {
          id: 3,
          text: 'salfgam'
        },
        {
          id: 1,
          text: 'dfgdfgs'
        },
        {
          id: 2,
          text: 'salfgam'
        },
        {
          id: 3,
          text: 'salfgam'
        },
        {
          id: 1,
          text: 'salfgam'
        },
        {
          id: 2,
          text: 'salfgam'
        },
        {
          id: 3,
          text: 'salfgam'
        },
        {
          id: 2,
          text: 'salfgam'
        },
        {
          id: 1,
          text: 'salfgam'
        },
        {
          id: 3,
          text: 'salfgam'
        },
        {
          id: 2,
          text: 'salfgam'
        }
      ]
    }
  }

  render () {
    return (
      <div className='chat-text' id='chat-text'>
        <div id='chating'>
          {this.state.chatText.map((obj) => {
            return (obj.id === 1 ? <MyMsg text={obj.text} /> : <YourMsg text={obj.text} />)
          })}
        </div>
      </div>
    )
  }
}

export default ChatBox
