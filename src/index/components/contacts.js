import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { saveConversationList } from '../../action/saveConversationList'
import Person from './person'
import funnel from '../img/funnel.png'
import search from '../img/search.png'

function Contacts () {
  const dispatch = useDispatch()
  const darkMod = useSelector(state => state.lightMod)
  const convList = useSelector(state => state.conversation_details)
  const id = window.localStorage.getItem('id')
  function search (event) {

  }

  useEffect(() => {
    axios.get('http://click.7grid.ir/conversation/', {
      params: {
        token: window.localStorage.getItem('token')
      }
    })
      .then((response) => {
        dispatch(saveConversationList(response.data.data.conversation_details))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className={darkMod === true ? 'contacts-dark-mod' : 'contacts'}>
      <div className='info'>
        <div className='name-page'>chat</div>
        <div className='sort'>
          <img className='sort-img' src={funnel} />
          <span>unread</span>
        </div>
      </div>
      <div className='search'>
        <img className='img-search' src={search} />
        <input onChange={(event) => search(event.target.value)} name='search' className='search-box' title='search' type='search' placeholder='Search' />
      </div>
      <div className='sl-line' />
      <div className='list-of-contact'>
        {convList.map((conv) => {
          return (
            <Person key={conv.id} convId={conv.id} nickName={conv.users.map((e) => e.id != id ? e.email : '')} datePm={conv.latest_message_date} lastPm={conv.latest_message} newPm={conv.newPm} imgProfile={conv.users.map((e) => e.avatar_url)} />
          )
        })}
      </div>
    </div>
  )
}

export default Contacts
