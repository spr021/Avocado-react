import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { sendNameToHeader } from '../../action/contacts'
import { MassageList } from '../../action/loadMassageList'
const moment = require('moment')
const FormData = require('form-data')

function Person (props) {
  const dispatch = useDispatch()
  const darkMod = useSelector(state => state.lightMod)

  function loadPerson () {
    dispatch(sendNameToHeader(props.nickName, props.imgProfile, props.convId))
    window.localStorage.setItem('conversation_id', props.convId)
    const now = new Date()
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)

    const fdata = new FormData()
    fdata.append('token', window.localStorage.getItem('token'))
    fdata.append('conversation_id', props.convId)
    fdata.append('size', 40)
    fdata.append('date', secondsSinceEpoch)

    axios.post('http://click.7grid.ir/conversation/details/', fdata)
      .then((response) => {
        dispatch(MassageList(response.data.data.messages))
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className={darkMod === true ? 'person-dark-mod' : 'person'} onClick={() => loadPerson()}>
      <div className='img-profile'>
        <img src={props.imgProfile} />
      </div>
      <div className='ct-info'>
        <div>
          {props.nickName !== null ? <div className='nick-name'>{props.nickName.slice(0, 8) + '...'}</div> : <div className='nick-name'>{props.nickName + '...'}</div>}
          <div className='date-pm'>{moment(new Date(props.datePm).getTime() + 12600000).fromNow()}</div>
        </div>
        <div>
          <div className='last-pm'>{props.lastPm}</div>
          <div className='new-pm'><span>{props.newPm}</span></div>
        </div>
      </div>
    </div>
  )
}

export default Person
