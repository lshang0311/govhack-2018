import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import GaugeChart from './GaugeChart'
import './MediaCardScore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

function MediaCard (props) {
  const {classes} = props
  return (
    <Card className={classes.card} disableRipple>

      <div style={{position: 'relative'}}>
        <div
          className={'risk-level__background risk-level__background' + (props.score < 34 ? '--low' : props.score < 67 ? '--moderate' : '--high')}>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            style={{color: 'white'}}
            className={'risk-level risk-level' + (props.score < 34 ? '--low' : props.score < 67 ? '--moderate' : '--high')}>
            {props.score < 34 ? <FontAwesomeIcon icon="info-circle"/> : <FontAwesomeIcon
              icon="exclamation-triangle"/>}&nbsp;
            {props.score < 34 ? 'LOW RISK' : props.score < 67 ? 'MODERATE RISK' : 'HIGH RISK'}
          </Typography>
        </div>
        <GaugeChart chartValue={props.score} width={330}/>
      </div>

      <CardContent>
        <Typography component="p" style={{fontSize: '16px'}}>
          This individual has a {props.score < 34 ? 'low' : props.score < 67 ? 'moderate' : 'high'} risk
          of non-compliance based on the following:
        </Typography>
        <ul style={{fontSize: '15px'}}>
          <li>Cost of living in region</li>
          <li>Income to debt ratio</li>
          <li>Value of assets</li>
        </ul>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  score: PropTypes.number,
}

export default withStyles(styles)(MediaCard)