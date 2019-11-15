import React from 'react'

class Person extends React.Component {
  render () {
    return (
      <div className='person'>
        <div className='ct-line' />
        <div className='img-profile'>
          <img src={this.props.imgProfile} />
        </div>
        <div className='ct-info'>
          <div>
            <div className='nick-name'>{this.props.nickName}</div>
            <div className='date-pm'>{this.props.datePm}</div>
          </div>
          <div>
            <div className='last-pm'>{this.props.lastPm}</div>
            <div className='new-pm'><span>{this.props.newPm}</span></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Person
