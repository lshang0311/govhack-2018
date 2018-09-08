import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'
import MediaCardScore from './MediaCardScore'

export default class GovScore extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {}
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'Insolved'}
          back={true}
          {...this.props}
          backCallback={() => {
            window.history.back()
          }}/>
        <div className={'page userPage'}>
          <MediaCardScore
            score={parseInt(this.props.match.params.score)}
          />
        </div>
      </div>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  GovScore.propTypes = {
    date: PropTypes.object.isRequired && PropTypes.instanceOf(Date),
    callback: PropTypes.func.isRequired,
    num: PropTypes.number,
    str: PropTypes.string
  }
}