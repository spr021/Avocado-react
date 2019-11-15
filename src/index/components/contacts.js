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
          <Person nickName='zahra' datePm='2 min' lastPm='salam' newPm='4' imgProfile={Boy1} />
          <Person nickName='maryam' datePm='5 min' lastPm='khobi' newPm='2' imgProfile={Girl} />
          <Person nickName='sara' datePm='2 hour' lastPm='kojayi ?' newPm='' imgProfile={Girl1} />
          <Person nickName='mmd' datePm='yesterday' lastPm='saber' newPm='' imgProfile={Boy} />
          <Person nickName='reza' datePm='15 min' lastPm='??????' newPm='1' imgProfile={Men} />
          <Person nickName='hamid' datePm='just now' lastPm='ali miad ?' newPm='' imgProfile={Men1} />
          <Person nickName='arman' datePm='3 min' lastPm='miay ?' newPm='' imgProfile={Men2} />
          <Person nickName='poya' datePm='12 min' lastPm='nmikhay biay' newPm='9' imgProfile={Men3} />
          <Person nickName='fateme' datePm='just now' lastPm='jozve elec dari' newPm='' imgProfile={Men4} />
          <Person nickName='arefe' datePm='5 hour' lastPm='kelas kojast' newPm='' imgProfile={Girl} />
          <Person nickName='mehrdad' datePm='12 hour' lastPm='saber' newPm='3' imgProfile={Boy} />
        </div>
      </div>
    )
  }
}

export default Contacts
