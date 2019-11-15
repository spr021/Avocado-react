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
          myText: true,
          text: 'salam'
        },
        {
          myText: true,
          text: 'rwq'
        },
        {
          myText: false,
          text: 'asf'
        },
        {
          myText: false,
          text: 'vbnk'
        },
        {
          myText: true,
          text: 'tryykgm'
        },
        {
          myText: false,
          text: 'dsfdf'
        },
        {
          myText: true,
          text: 'salfgam'
        },
        {
          myText: false,
          text: 'dfgdfgs'
        },
        {
          myText: true,
          text: 'salfgam'
        },
        {
          myText: true,
          text: 'salfgam'
        },
        {
          myText: true,
          text: 'salfgam'
        },
        {
          myText: false,
          text: 'salfgam'
        },
        {
          myText: true,
          text: 'salfgam'
        },
        {
          myText: false,
          text: 'salfgam'
        },
        {
          myText: false,
          text: 'salfgam'
        },
        {
          myText: true,
          text: 'salfgam'
        },
        {
          myText: false,
          text: 'salfgam'
        }
      ]
    }
  }

  render () {
    return (
      <div className='chat-text' id='chat-text'>
        <div id='chating'>
          {this.state.chatText.map((text) => {
            return (text.myText === true ? <MyMsg text={text.text} /> : <YourMsg text={text.text} />)
          })}
        </div>
      </div>
    )
  }
}

export default ChatBox
