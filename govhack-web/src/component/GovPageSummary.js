import React from 'react'
import Toolbar from './Toolbar'
import './GovPageSummary.css'
import SearchableTable from './SearchableTable'

export default class GovPage extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  mainTable = {
    table: 'mainTable'
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'Gov Page'} {...this.props}/>
        <div className={'container test'}>
          <SearchableTable classes={this.mainTable}/>
        </div>
      </div>
    )
  }
}
