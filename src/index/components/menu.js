import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../img/avocado.json'
import contacts from '../img/contacts.png'
import chat from '../img/chat.png'
import group from '../img/group.png'
import channel from '../img/channel.png'
import file from '../img/file.png'
import settings from '../img/settings.png'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

function Menu () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className='menu'>
      <Link to='/im/'>
        <div className='logo'><Lottie options={defaultOptions} height={56} width={56} /></div>
      </Link>
      <div className='menu-item'><img className='img-logo' src={contacts} /></div>
      <div className='menu-item'><img className='img-logo' src={chat} /></div>
      <div className='menu-item'><img className='img-logo' src={group} /></div>
      <div className='menu-item'><img className='img-logo' src={channel} /></div>
      <div className='menu-item'><img className='img-logo' src={file} /></div>
      <Link to='/setting/'>
        <div className='menu-item menu-item-setting'><img className='img-logo' src={settings} /></div>
      </Link>
    </div>
  )
}

export default Menu
