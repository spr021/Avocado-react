import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { saveConversationList } from '../../action/saveConversationList'
import Person from './person'
import funnel from '../img/funnel.png'
import searchh from '../img/search.png'
import FormData from 'form-data'

function Contacts () {
  const [search, setSearch] = useState({
    search: []
  })
  const dispatch = useDispatch()
  const darkMod = useSelector(state => state.lightMod)
  const convList = useSelector(state => state.conversation_details)
  const id = window.localStorage.getItem('id')

  function searchUsers (event) {
    if (event) {
      const data = new FormData()
      data.append('token', window.localStorage.getItem('token'))
      data.append('query', event)
      data.append('size', 5)

      axios.post('http://click.7grid.ir/explore/search/contacts/', data)
        .then((response) => {
          setSearch({ search: response.data.data.users })
          console.log('seeeeerch', response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  function selectChat (userId) {
    var fdata = new FormData()
    fdata.append('token', window.localStorage.getItem('token'))
    fdata.append('user_id', userId)

    axios.post('http://click.7grid.ir/conversation/', fdata)
      .then((response) => {
        console.log('res::', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    axios.get('http://click.7grid.ir/conversation/', {
      params: {
        token: window.localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log('conv::::', response.data)
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
        <img className='img-search' src={searchh} />
        <input onChange={(event) => searchUsers(event.target.value)} name='search' className='search-box' title='search' type='search' placeholder='Search' />
      </div>
      <div className='sl-line' />
      <div className='list-of-contact'>
        {
          search.search.map((user) => {
            return (
              <p onClick={() => selectChat(user.id)} className='search-member' key={user.id}>{user.email}</p>
            )
          })
        }
        {convList.map((conv) => {
          return (
            conv.users.map((user) => {
              if (user.id != id) {
                return (
                  <Person
                    key={conv.id}
                    convId={conv.id}
                    nickName={user.email}
                    datePm={conv.latest_message_date}
                    lastPm={conv.latest_message}
                    newPm={conv.newPm}
                    imgProfile={user.avatar_url}
                  />
                )
              } else {
                return null
              }
            })
          )
        })}
      </div>
    </div>
  )
}

export default Contacts
