import React from 'react'
import { connect } from 'react-redux'
import { sendPmToChatBox } from '../../action/sendPm'
import Attachment from '../img/attachment.png'
import Happiness from '../img/happiness.png'
import PaperPlane from '../img/paper-plane.png'

class WriteBox extends React.Component {
  constructor () {
    super()
    this.state = {
      pm: ''
    }
  }

  send (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('send-pm').click()
    }
  }

  render () {
    return (
      <div className='write-box'>
        <div className='attach'>
          <img src={Attachment} />
        </div>
        <div className='write-box-chat'>
          <input onChange={(event) => this.setState({ pm: event.target.value })} onkeydown={(event) => this.send(event)} id='my-talk' type='text' placeholder='write your massage ...' />
        </div>
        <div className='emoji'>
          <img src={Happiness} />
        </div>
        <div
          onClick={() => {
            this.props.dispatch(sendPmToChatBox(this.state.pm))
            document.getElementById('my-talk').value = ''
          }}
          className='send-pm'
          id='send-pm'
        >
          <img src={PaperPlane} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProbs = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProbs)(WriteBox)
