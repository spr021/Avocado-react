import React from 'react'
import { useSelector } from 'react-redux'
import MyMsg from './myChat'
import YourMsg from './yourChat'

function ChatBox () {
  const massageList = useSelector(state => state.saveMassageList)
  const chatText = useSelector(state => state.massageList)
  const nickName = useSelector(state => state.name)
  const darkMod = useSelector(state => state.lightMod)

  return (
    <div className={darkMod === true ? 'chat-text-dark-mod' : 'chat-text'} id='chat-text'>
      <div id='chating'>
        {nickName === '' ? <p className='select-chat'>Please select a chat to start messaging</p> : ''}
        {massageList.map((obj) => {
          if (obj.sender.id !== null) {
            return (obj.sender.id == window.localStorage.getItem('id') ? <MyMsg key={obj.date} text={obj.text} /> : <YourMsg key={obj.date} text={obj.text} />)
          }
        })}
      </div>
    </div>
  )
}

export default ChatBox
