import React from 'react'
import Menu from './components/menu'
import Contacts from './components/contacts'
import Chat from './components/chat'

class Container extends React.Component {
  render () {
    return (
      <div className='container'>
        <Menu />
        <Contacts />
        <Chat />
      </div>

    )
  }
}

export default Container
