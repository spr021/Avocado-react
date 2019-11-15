import React from 'react'
// import './styles.css';
import MyMsg from './myChat'
import YourMsg from './yourChat'

class ChatBox extends React.Component {
  render () {
    return (
      <div className='chat-text' id='chat-text'>
        <div id='chating'>
          <MyMsg text='salam' />
          <MyMsg text='khobu' />
          <YourMsg text='mmnon' />
          <MyMsg text='chekhabar' />
          <MyMsg text='????' />
          <YourMsg text='salamati' />
          <YourMsg text='to chekhabar ?' />
          <MyMsg text='hich' />
          <MyMsg text='mipelekim' />
          <MyMsg text=':D' />
        </div>
      </div>
    )
  }
}

export default ChatBox
