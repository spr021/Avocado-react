import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyMsg from './myChat'
import YourMsg from './yourChat'
import axios from 'axios'
import FormData from 'form-data'
import { saveNewMassage } from '../../action/saveNewMassgeList'
import { saveConversationList } from '../../action/newPmToChatBox'

function ChatBox () {
  const dispatch = useDispatch()
  const massageList = useSelector(state => state.saveMassageList)
  const nickName = useSelector(state => state.name)
  const darkMod = useSelector(state => state.lightMod)
  const newMassgeList = useSelector(state => state.newMassgeList)

  useEffect(() => {
    const interval = setInterval(() => {
      const fdata = new FormData()
      fdata.append('token', window.localStorage.getItem('token'))
      fdata.append('conversation_id', window.localStorage.getItem('conversation_id'))

      axios.post('http://click.7grid.ir/conversation/seen/', fdata)
        .then((response) => {
        })
        .catch(() => {

        })

      const formdata = new FormData()
      formdata.append('token', window.localStorage.getItem('token'))
      formdata.append('date', window.localStorage.getItem('lastPmDate'))

      axios.post('http://click.7grid.ir/conversation/update/', formdata)
        .then((response) => {
          dispatch(saveNewMassage(response.data))
          console.log('OOOOOOOOOO', newMassgeList)
          { /*
        data: Array(2)
          0:
            conversation:
            id: 40
            latest_message_date: "2019-12-23T22:14:06.857297"
            unseen_messages:
            6: 2
            35: 0
            __proto__: Object
            __proto__: Object
            date: "2019-12-23T22:14:06.857297"
            receiver: {id: 6, avatar_url: "http://api.paywith.click//media/default.jpg", flag_url: "https://www.countryflags.io/None/flat/64.png", cover_url: "http://api.paywith.click//media/cover.jpg", name: null, …}
            sender: {id: 35, avatar_url: "http://api.paywith.click//media/default.jpg", flag_url: "https://www.countryflags.io/None/flat/64.png", cover_url: "http://api.paywith.click//media/cover.jpg", name: null, …}
            text: "یی"
            __proto__: Object
        */ }
          const ss = newMassgeList.map((ww) => {
            if (ww.conversation.id == 40) {
              dispatch(saveConversationList(ww.text))
            }
          })
        })
        .catch(() => {

        })
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [])

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
