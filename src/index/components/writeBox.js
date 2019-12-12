import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendPmToChatBox } from '../../action/sendPm'
import Attachment from '../img/attachment.png'
import Happiness from '../img/happiness.png'
import PaperPlane from '../img/paper-plane.png'

function WriteBox () {
  const [pm, setPm] = useState({
    pm: ''
  })

  const dispatch = useDispatch()
  const chatText = useSelector(state => state.massageList)

  function send (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('send-pm').click()
    }
  }

  return (
    <div className='write-box'>
      <div className='attach'>
        <img src={Attachment} />
      </div>
      <div className='write-box-chat'>
        <input onChange={(event) => setPm({ pm: event.target.value })} onKeyDown={(event) => send(event)} id='my-talk' type='text' placeholder='write your massage ...' />
      </div>
      <div className='emoji'>
        <img src={Happiness} />
      </div>
      <div
        onClick={() => {
          if (document.getElementById('my-talk').value !== '') {
            dispatch(sendPmToChatBox(pm.pm))
            document.getElementById('my-talk').value = ''
            setPm({ pm: '' })
          }
        }}
        className='send-pm'
        id='send-pm'
      >
        <img src={PaperPlane} />
      </div>
    </div>
  )
}

export default WriteBox
