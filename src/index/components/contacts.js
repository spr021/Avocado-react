import React from 'react'
// import './styles.css';
import Person from './person'

import funnel from '../img/funnel.png'
import search from '../img/search.png'
import Boy from '../img/avatars/boy.png'
import Boy1 from '../img/avatars/boy-1.png'
import Girl from '../img/avatars/girl.png'
import Girl1 from '../img/avatars/girl-1.png'
import Men from '../img/avatars/man.png'
import Men1 from '../img/avatars/man-1.png'
import Men2 from '../img/avatars/man-2.png'
import Men3 from '../img/avatars/man-3.png'
import Men4 from '../img/avatars/man-4.png'

class Contacts extends React.Component {
  constructor () {
    super()
    this.state = {
      contacts: [
        {
          imgProfile: Boy,
          nickName: 'mmd',
          lastPm: 'saber',
          datePm: '2 min',
          newPm: '5'
        },
        {
          imgProfile: Boy1,
          nickName: 'hamed',
          lastPm: 'kojayyy ?',
          datePm: 'yesterday',
          newPm: '7'
        },
        {
          imgProfile: Girl,
          nickName: 'sara',
          lastPm: 'hey',
          datePm: '5 min',
          newPm: ''
        },
        {
          imgProfile: Girl1,
          nickName: 'maryam',
          lastPm: 'salam alamsa',
          datePm: '9 min',
          newPm: '12'
        },
        {
          imgProfile: Men,
          nickName: 'dfgfh',
          lastPm: 'hey',
          datePm: '5 min',
          newPm: ''
        },
        {
          imgProfile: Girl,
          nickName: 'cvnbvg',
          lastPm: 'dgdfghd',
          datePm: '5 min',
          newPm: '7'
        },
        {
          imgProfile: Men1,
          nickName: 'dsgdfbv',
          lastPm: 'tyjshgfhd',
          datePm: '5 min',
          newPm: ''
        },
        {
          imgProfile: Men2,
          nickName: 'dsfdsf',
          lastPm: 'fghfdgh',
          datePm: '5 min',
          newPm: '2'
        },
        {
          imgProfile: Men3,
          nickName: 'agfddfgdfg',
          lastPm: 'treuyt',
          datePm: '5 min',
          newPm: ''
        },
        {
          imgProfile: Men4,
          nickName: 'uykgch',
          lastPm: 'dgfdfg',
          datePm: '5 min',
          newPm: '3'
        }
        
      ]
    }
  }

  render () {
    return (
      <div className='contacts'>
        <div className='info'>
          <div className='name-page'>chat</div>
          <div className='sort'>
            <img className='sort-img' src={funnel} />
            <span>unread</span>
          </div>
        </div>
        <div className='search'>
          <img className='img-search' src={search} />
          <input name='search' className='search-box' title='search' type='search' placeholder='Search' />
        </div>
        <div className='sl-line' />
        <div className='list-of-contact'>
          {this.state.contacts.map((conv) => {
            return (
              <Person key={conv.datePm} nickName={conv.nickName} datePm={conv.datePm} lastPm={conv.lastPm} newPm={conv.newPm} imgProfile={conv.imgProfile} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Contacts
