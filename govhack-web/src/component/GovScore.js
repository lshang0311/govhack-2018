import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'

export default class GovScore extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {}
  }

  render () {
    return (
      <div className={'container'}>
        <Toolbar title={'Insolved'} back={true} {...this.props} />
        <div className={'page userPage'}>
          SCORE IS {this.props.match.params.score}
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