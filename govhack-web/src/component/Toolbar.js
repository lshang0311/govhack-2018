import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Tab from '@material-ui/core/Tab/Tab'
import { path } from '../paths'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function ButtonAppBar (props) {
  const {classes} = props
  const selectedTab = props.history.location.pathname.indexOf(path.gov_predict) !== -1? 'three' : ''
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {props.back ? <ArrowBack/> : <MenuIcon/>}
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
          <Tabs value={selectedTab} onChange={(event, value) => {
            
          }}>
            <Tab value="one" label="Cases"/>
            <Tab value="two" label="Explore"/>
            <Tab value="three" label="Prediction tool"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string.isRequired,
  back: PropTypes.bool
}

export default withStyles(styles)(ButtonAppBar)