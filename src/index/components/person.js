import React from 'react'
import { connect } from 'react-redux'
import { sendNameToHeader } from '../../action/contacts'

class Person extends React.Component {
  render () {
    return (
      <div className='person' onClick={() => this.props.dispatch(sendNameToHeader(this.props.nickName, this.props.imgProfile))}>
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

const mapDispatchToProbs = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProbs)(Person)
