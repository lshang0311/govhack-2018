import React from 'react'
import './GovPageSummary.css'

export default class UserDetail extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
    }

    render () {
        return (
            this.props.isSelected && <div className={'blah'}>
                <br/><br/>
                <strong>{this.props.oneTitle}</strong><br/>
                {this.props.oneValue}
                <br/><br/>
                <strong>{this.props.twoTitle}</strong><br/>
                {this.props.twoValue}
                <br/><br/>
                <strong>{this.props.threeTitle}</strong><br/>
                {this.props.threeValue}
            </div>
        )
    }
}
