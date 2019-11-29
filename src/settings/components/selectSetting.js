import React from 'react'

class SelectSetting extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='contacts'>
        <div className='info'>
          <div className='name-page'>Setting</div>
        </div>
        <div className='search'>
          <input name='search' className='search-box' title='search' type='search' placeholder='Search' />
        </div>
        <div className='sl-line' />
        
      </div>
    )
  }
}
export default SelectSetting
