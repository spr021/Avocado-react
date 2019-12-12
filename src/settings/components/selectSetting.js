import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkModChange } from '../../action/darkMod'
import Switch from '@material-ui/core/Switch'

function SelectSetting () {
  const [darkMod, setDarkMod] = useState({
    value: true
  })

  const dispatch = useDispatch()
  const darkModd = useSelector(state => state.lightMod)

  function DarkMod () {
    setDarkMod({ value: !darkMod.value })
    dispatch(darkModChange(darkMod.value))
  }

  return (
    <div className={darkModd === true ? 'contacts-dark-mod' : 'contacts'}>
      <div className='info'>
        <div className='name-page'>Setting</div>
      </div>
      <div className='search'>
        <input name='search' className='search-box' title='search' type='search' placeholder='Search' />
      </div>
      <div className='sl-line' />
      <div className='select-settings'>
        <div className='dark-mod'>
          <span>Dark Mod</span>
          <Switch onChange={() => DarkMod()} value='checkedA' inputProps={{ 'aria-label': 'Dark MOd' }} />
        </div>
      </div>
    </div>
  )
}

export default SelectSetting
