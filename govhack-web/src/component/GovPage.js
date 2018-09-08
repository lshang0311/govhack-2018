import React from 'react'
import Toolbar from './Toolbar'
import './GovPage.css'
import Button from '@material-ui/core/Button/Button'
import { svcPath } from '../Api'
import NonComplianceForm from './NonComplianceForm'

export default class GovPage extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      chartValue: -1,
      buttonDisabled: false
    }
  }

  /*
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
  }*/

  onClickSubmit = () => {
    this.setState({buttonDisabled: true})
    const body = {'sex': 0, 'familySituation': 0, 'state': 0}
    const keys = Object.keys(this.form.state)
    keys.forEach((k) => {
      body[k] = this.form.state[k]
    })
    const url = svcPath.post_predict
    svcPath.fetch(url,
      {
        method: 'POST',
        body: JSON.stringify(body)
      }).then(response => {
      this.setState({buttonDisabled: false})
      return response.json()

    }).then((data) => {
      const score = parseInt(data['risk'] * 100)
      this.props.history.push(`/gov/predict/${score}`)
    }).catch(error => {
      this.setState({buttonDisabled: false})
      console.log(error)

    })
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'Insolved'} {...this.props} />
        <div className={'page govPage'}>
          <h2>Non-compliance prediction tool</h2>
          <h4>Enter details of a personal insolvency case to predict non-compliance.</h4>
          <NonComplianceForm ref={(node) => this.form = node}/>
          <div className={'govPage__button'}>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              disabled={this.state.buttonDisabled}
              onClick={this.onClickSubmit}>
              Predict non-compliance
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
