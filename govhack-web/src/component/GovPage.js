import React from 'react'
import Toolbar from './Toolbar'
import './GovPage.css'
import ChipsSearchBar from './ChipsSearchBar'
import Button from '@material-ui/core/Button/Button'
import { path } from '../Api'
import GuageChart from './GaugeChart'

export default class GovPage extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      chartValue: -1
    }
  }

  onClickSubmit = () => {
    const fields = this.chipsSearchBar.state.chipData
    const body = {'sex': 0, 'familySituation': 0, 'state': 0}
    fields.forEach((f) => {
      body[f.group] = f.value
    })
    const url = path.post_predict
    path.fetch(url, {method: 'POST', body: JSON.stringify(body)}).then(response => {
      return response.json()
    }).then((data) => {
      this.setState({
        chartValue: data['risk'] * 100
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'Gov Page'}/>
        <div className={'page govPage'}>
          <ChipsSearchBar ref={(node) => { this.chipsSearchBar = node }}/>
          <div className={'govPage__submit'}>
            <Button variant="contained" color="primary" onClick={this.onClickSubmit}>
              Submit
            </Button>
          </div>
          <GuageChart chartValue={this.state.chartValue}/>
        </div>
      </div>
    )
  }
}
