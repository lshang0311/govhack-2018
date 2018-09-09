import React from 'react'
import './GovPageSummary.css'
import Toolbar from './Toolbar'
import Explore from '../images/explore3.png'

export default class GovExplore extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'Insolved'} {...this.props} />
        <div style={{maxWidth: 1000, margin: '8px auto'}}>
          <img src={Explore} style={{maxWidth: 1000}}  />
        </div>
      </div>
    )
  }
}
