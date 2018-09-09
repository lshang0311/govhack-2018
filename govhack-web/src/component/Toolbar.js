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
  let selectedTab = props.history ? props.history.location.pathname.indexOf(path.gov_predict) !== -1 ? 'three' : '' : ''
  if (selectedTab === '') {
    selectedTab = props.history ? props.history.location.pathname.indexOf(path.gov_cases) !== -1 ? 'one' : '' : ''
  } else if (selectedTab === '') {
    selectedTab = props.history ? props.history.location.pathname.indexOf(path.gov_explore) !== -1 ? 'two' : '' : ''
  } else if (selectedTab === '') {
    selectedTab = props.history ? props.history.location.pathname.indexOf(path.home) !== -1 ? 'one' : '' : ''
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={props.backCallback}>
            {props.back ? <ArrowBack/> : <MenuIcon/>}
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
          <Tabs
            TabIndicatorProps={{style: {backgroundColor:'#FFFFFF'}}}
            value={selectedTab}
            onChange={(event, value) => {
              if (value === 'three') {
                props.history.push(path.gov_predict)
              } else if (value === 'one') {
                props.history.push(path.gov_cases)
              }
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
  title: PropTypes.string.isRequired,
  classes: PropTypes.object,
  back: PropTypes.bool,
  backCallback: PropTypes.func
}

export default withStyles(styles)(ButtonAppBar)