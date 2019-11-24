import React from 'react'
import { connect } from 'react-redux'
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
          {this.props.chatText.map((obj) => {
            console.log('###', this.props.chatText)
            console.log('@@@', obj)
            return (obj.id === 1 ? <MyMsg text={obj.pm} /> : <YourMsg text={obj.pm} />)
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chatText: state.massageList
})

export default connect(mapStateToProps)(ChatBox)
