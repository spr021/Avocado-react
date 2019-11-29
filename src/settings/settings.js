import React from 'react'
import Menu from '../index/components/menu'
import SelectSetting from './components/selectSetting'
import ChangeSetting from './components/changeSetting'

class Container extends React.Component {
  render () {
    return (
      <div className='container'>
        <Menu />
        <SelectSetting />
        <ChangeSetting />
      </div>

    )
  }
}

export default Container
