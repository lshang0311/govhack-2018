import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import UserDetail from './UserDetail'
import './SearchableTable.css'
import SearchTableFilters from './SearchTableFilters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let counter = 0

function createData (risk, uniqueid, year, state, familySituation, occupation, gender, income, unsecuredDebts, assets) {
  counter += 1
  return {
    id: counter,
    risk,
    uniqueid,
    year,
    state,
    familySituation,
    occupation,
    gender,
    income,
    unsecuredDebts,
    assets
  }
}

function desc (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort (array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting (order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}

const rows = [
  {id: 'risk', numeric: false, disablePadding: true, label: 'Non Compliance Risk'},
  {id: 'id', numeric: true, disablePadding: false, label: 'ID'},
  {id: 'year', numeric: true, disablePadding: false, label: 'Year'},
  {id: 'state', numeric: true, disablePadding: false, label: 'State or Territory'},
]

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }

  render () {
    const {order, orderBy} = this.props

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={'default'}
                sortDirection={orderBy === row.id ? order : false}>
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}>
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            )
          }, this)}
        </TableRow>
      </TableHead>
    )
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
})

let EnhancedTableToolbar = props => {
  const {classes} = props

  return (
    <Toolbar
      className={classNames(classes.root)}>
      <div className={classes.title}>

        <Typography variant="title" id="tableTitle">
          Personal Insolvency Cases
        </Typography>

      </div>
      <div className={classes.spacer}/>

    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
}

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar)

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {},
  tableWrapper: {
    overflowX: 'auto',
  },
})

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'id',
    selected: [],
    data: [
      createData('High', 3444700, 2010, 'NSW', 'Single without Dependents', 'Clerical and Office Support Workers', 'Male', '$0-$49999', '$100000-$149999', '$0-$49999'),
      createData('High', 4028964, 2013, 'NSW', 'Single without Dependents', 'Inquiry Clerks and Receptionists', 'Male', '$0-$49999', '$150000-$199999', '$0-$49999'),
      createData('High', 3839754, 2008, 'NSW', 'Single without Dependents', '', 'Male', '$0-$49999', '$50000-$99999', '$0-$49999'),
      createData('Moderate', 3051954, 2014, 'VIC', 'Couple with Dependants', 'Sales Representatives and Agents', 'Male', '$0-$49999', '$0-$49999', '$0-$49999'),
      createData('Moderate', 3440373, 2010, 'NSW', 'Not Stated', '', 'Male', '$0-$49999', '$0-$49999', '$0-$49999'),
      createData('Moderate', 3260909, 2015, 'QLD', 'Single without Dependents', 'Sales Assistants and Salespersons', 'Male', '$0-$49999', '$550000-$599999', '$300000-$349999'),
      createData('Low', 3132367, 2009, 'QLD', 'Unknown', '', 'Male', '$0-$49999', '$100000-$149999', '$0-$49999'),
      createData('Low', 3999868, 2015, 'WA', 'Couple without Dependants', 'Design, Engineering, Science and Transport Professionals', 'Male', '$0-$49999', '$100000-$149999', '$750000-$799999'),
    ],
    page: 0,
    rowsPerPage: 10,
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({order, orderBy})
  }

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({selected: state.data.map(n => n.id)}))
      return
    }
    this.setState({selected: []})
  }

  handleClick = (event, id) => {
    const {selected} = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    this.setState({selected: newSelected})
  }

  handleChangePage = (event, page) => {
    this.setState({page})
  }

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value})
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  getColorFor = (risk) => {
    if (risk === 'High') {
      return 'risk--high'
    } else if (risk === 'Moderate') {
      return 'risk--moderate'
    } else {
      return 'risk--low'
    }
  }

  render () {
    const {classes} = this.props
    const {data, order, orderBy, selected, rowsPerPage, page} = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <div className={'cases'}>
        <div className={'cases__filter'}>
          <SearchTableFilters />
        </div>
        <div className={'cases__table'}>
          <EnhancedTableToolbar numSelected={selected.length}/>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}/>

              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id)
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}>
                        <TableCell component="th" scope="row" padding={'default'}>
                          <span className={this.getColorFor(n.risk)}><FontAwesomeIcon icon="circle"/></span>&nbsp;&nbsp;{n.risk}
                          <UserDetail isSelected={isSelected} oneTitle={'Family Situation'} oneValue={n.familySituation}
                            twoTitle={'Occupation'} twoValue={n.occupation} threeTitle={'Gender'}
                            threeValue={n.gender}/>
                        </TableCell>
                        <TableCell numeric>
                          {n.uniqueid}
                          <UserDetail isSelected={isSelected} oneTitle={'Income'} oneValue={n.income}
                            twoTitle={'Unsecured Debts'} twoValue={n.unsecuredDebts} threeTitle={'Value of Assets'}
                            threeValue={n.assets}/>
                        </TableCell>
                        <TableCell numeric>{n.year}</TableCell>

                        <TableCell numeric>{n.state}</TableCell>
                      </TableRow>
                    )
                  })}

                {emptyRows > 0 && (
                  <TableRow style={{height: 49 * emptyRows}}>
                    <TableCell colSpan={6}/>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </div>
      </div>
    )
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EnhancedTable)
