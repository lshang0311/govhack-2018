import React from 'react'
import Toolbar from './Toolbar'

export default class UserPage extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {}
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'User Page'} />
        <div className={'page userPage'}>
          USER PAGE
        </div>
      </div>
    )
  }
}