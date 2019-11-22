import React from 'react'
import { connect } from 'react-redux'
import Avatar from '../img/avatars/girl-1.png'
import Contact from '../img/contact.png'
import Star from '../img/star.png'
import Information from '../img/information.png'
import Menu from '../img/menu.png'
import AccountImg from '../img/avatars/boy.png'

class Account extends React.Component {
  render () {
    return (
      <div className='account'>
        <div onClick='profileView()'>
          <div className='profile-img'>
            <img src={Avatar} />
          </div>
          <div className='username'>{this.props.nickName}</div>
        </div>
        <div>
          <div className='new-msg'>
            <span>+ New Massage</span>
          </div>
          <div className='account-list'>
            <div className='account-img'>
              <img src={AccountImg} />
            </div>
            <div className='account-name'>saber</div>
          </div>
          <div className='fav'>
            <div><img src={Contact} /></div>
            <div><img src={Star} /></div>
            <div><img src={Information} /></div>
            <div><img src={Menu} /></div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    nickName: state.name
  })
}

export default connect(mapStateToProps)(Account)
