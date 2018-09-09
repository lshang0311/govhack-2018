import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'
import Input from '@material-ui/core/Input/Input'
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Search from '@material-ui/icons/Search'
import './SearchableTableFilters.css'
import Select from '@material-ui/core/Select/Select'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'

export default class SearchTableFilters extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      search_id: '',
      risk: '',
      year: 0,
      state: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render () {
    return (
      <div className={'search-table-filters'}>
        <div><h4 style={{marginBottom: 8}}>ID SEARCH</h4></div>
        <FormControl className={''} fullWidth={true}>
          <Input
            id="search_id"
            name={'search_id'}
            value={this.state.search_id}
            onChange={this.handleChange}
            style={{width: '136px'}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="Toggle password visibility">
                  <Search/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div><h4>FILTERS</h4></div>

        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="risk" shrink={true}>Risk</InputLabel>
          <Select
            value={this.state.risk}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'risk',
              id: 'risk',
            }}>
            <MenuItem value={0}>High</MenuItem>
            <MenuItem value={1}>Moderate</MenuItem>
            <MenuItem value={2}>Low</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={'form-control'} fullWidth={true} style={{marginTop: 32}}>
          <InputLabel htmlFor="year" shrink={true}>Year</InputLabel>
          <Select
            value={this.state.year}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'year',
              id: 'year',
            }}>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2014}>2014</MenuItem>
            <MenuItem value={2013}>2013</MenuItem>
            <MenuItem value={2012}>2012</MenuItem>
            <MenuItem value={2011}>2011</MenuItem>
            <MenuItem value={2010}>2010</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={'form-control'} fullWidth={true} style={{marginTop: 32}}>
          <InputLabel htmlFor="state" shrink={true}>State/Territory</InputLabel>
          <Select
            value={this.state.state}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'state',
              id: 'state',
            }}>
            <MenuItem value={'ACT'}>ACT</MenuItem>
            <MenuItem value={'NSW'}>NSW</MenuItem>
            <MenuItem value={'NT'}>NT</MenuItem>
            <MenuItem value={'QLD'}>QLD</MenuItem>
            <MenuItem value={'SA'}>SA</MenuItem>
            <MenuItem value={'VIC'}>VIC</MenuItem>
            <MenuItem value={'WA'}>WA</MenuItem>
          </Select>
        </FormControl>
      </div>)
  }
}

if (process.env.NODE_ENV !== 'production') {
  SearchTableFilters.propTypes = {
    callback: PropTypes.func,
  }
}