import './NonComplianceForm.css'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import Select from '@material-ui/core/Select/Select'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'

export default class NonComplianceForm extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
    }
  }

  handleChange = event => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render () {
    return (
      <form className={'non-compliance-form'} noValidate autoComplete="off">
        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="sex" shrink={true}>Gender</InputLabel>
          <Select
            value={this.state.sex}
            onChange={this.handleChange}
            inputProps={{
              name: 'sex',
              id: 'sex',
            }}>
            <MenuItem value={0}>Female</MenuItem>
            <MenuItem value={1}>Male</MenuItem>
            <MenuItem value={2}>Not stated</MenuItem>
            <MenuItem value={3}>Unknown</MenuItem>
          </Select>
        </FormControl>

          <FormControl className={'form-control'} fullWidth={true}>
              <InputLabel htmlFor="state" shrink={true}>State</InputLabel>
              <Select
                  value={this.state.sex}
                  onChange={this.handleChange}
                  inputProps={{
                      name: 'state',
                      id: 'state',
                  }}>
                  <MenuItem value={0}>Australian Capital Territory</MenuItem>
                  <MenuItem value={1}>International</MenuItem>
                  <MenuItem value={2}>New South Wales</MenuItem>
                  <MenuItem value={3}>Northern Territory</MenuItem>
                  <MenuItem value={4}>Queensland</MenuItem>
                  <MenuItem value={5}>South Australia</MenuItem>
                  <MenuItem value={6}>Tasmania</MenuItem>
                  <MenuItem value={7}>Unknown</MenuItem>
                  <MenuItem value={8}>Victoria</MenuItem>
                  <MenuItem value={9}>Western Australia</MenuItem>
              </Select>
          </FormControl>

        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="familySituation" shrink={true}>Family situation</InputLabel>
          <Select
            value={this.state.familySituation}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'familySituation',
              id: 'familySituation',
            }}>
            <MenuItem value={0}>Couple with Dependants</MenuItem>
            <MenuItem value={1}>Couple without Dependants</MenuItem>
            <MenuItem value={2}>Not stated</MenuItem>
            <MenuItem value={3}>Single with Dependants</MenuItem>
            <MenuItem value={4}>Single without Dependants</MenuItem>
            <MenuItem value={5}>Family Unknown</MenuItem>
          </Select>
        </FormControl>


        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="occupation" shrink={true}>Occupation</InputLabel>
          <Select
            value={this.state.occupation}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'occupation',
              id: 'occupation',
            }}>
              <MenuItem value={33}>Other Technicians and Trades Workers</MenuItem>
              <MenuItem value={15}>Farm, Forestry and Garden Workers</MenuItem>
              <MenuItem value={5}>Chief Executives, General Managers
                  and
                  Legislators</MenuItem>
              <MenuItem value={0}>AFSA</MenuItem>
              <MenuItem value={1}>Arts and Media Professionals</MenuItem>
              <MenuItem value={3}>Business, Human Resource and
                  Marketing Professionals</MenuItem>
              <MenuItem value={40}>Skilled Animal and Horticultural
                  Workers</MenuItem>
              <MenuItem value={31}>Other Clerical and Administrative
                  Workers</MenuItem>
              <MenuItem value={22}>Hospitality Workers</MenuItem>
              <MenuItem value={23}>Hospitality, Retail and Service
                  Managers</MenuItem>
              <MenuItem value={42}>Sports and Personal Service Workers</MenuItem>
              <MenuItem value={8}>Construction Trades Workers</MenuItem>
              <MenuItem value={32}>Other Labourers</MenuItem>
              <MenuItem value={36}>Road and Rail Drivers</MenuItem>
              <MenuItem value={29}>Numerical Clerks</MenuItem>
              <MenuItem value={18}>Food Trades Workers</MenuItem>
              <MenuItem value={35}>Protective Service Workers</MenuItem>
              <MenuItem value={17}>Food Preparation Assistants</MenuItem>
              <MenuItem value={38}>Sales Representatives and Agents</MenuItem>
              <MenuItem value={13}>Engineering, ICT and Science
                  Technicians</MenuItem>
              <MenuItem value={24}>ICT Professionals</MenuItem>
              <MenuItem value={37}>Sales Assistants and Salespersons</MenuItem>
              <MenuItem value={10}>Design, Engineering, Science
                  and
                  Transport Professionals</MenuItem>
              <MenuItem value={4}>Carers and Aides</MenuItem>
              <MenuItem value={6}>Cleaners and Laundry Workers</MenuItem>
              <MenuItem value={2}>Automotive and Engineering Trades
                  Workers</MenuItem>
              <MenuItem value={41}>Specialist Managers</MenuItem>
              <MenuItem value={30}>Office Managers and Program
                  Administrators</MenuItem>
              <MenuItem value={27}>Machine and Stationary Plant Operators</MenuItem>
              <MenuItem value={26}>Legal, Social and Welfare
                  Professionals</MenuItem>
              <MenuItem value={12}>Electrotechnology and
                  Telecommunications Trades Workers</MenuItem>
              <MenuItem value={7}>Clerical and Office Support Workers</MenuItem>
              <MenuItem value={20}>Health Professionals</MenuItem>
              <MenuItem value={28}>Mobile Plant Operators</MenuItem>
              <MenuItem value={14}>Factory Process Workers</MenuItem>
              <MenuItem value={39}>Sales Support Workers</MenuItem>
              <MenuItem value={9}>Construction and Mining Labourers</MenuItem>
              <MenuItem value={21}>Health and Welfare Support Workers</MenuItem>
              <MenuItem value={11}>Education Professionals</MenuItem>
              <MenuItem value={19}>General Clerical Workers</MenuItem>
              <MenuItem value={34}>Personal Assistants and Secretaries</MenuItem>

              <MenuItem value={43}>Storepersons</MenuItem>
              <MenuItem value={25}>Inquiry Clerks and Receptionists</MenuItem>
              <MenuItem value={16}>Farmers and Farm Managers</MenuItem>
              <MenuItem value={44}>Unknown</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="income" shrink={true}>Income</InputLabel>
          <Select
            value={this.state.income}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'income',
              id: 'income',
            }}>
              <MenuItem value={0}>$-100,000-$-50,001</MenuItem>
              <MenuItem value={1}>$-50,000-$-1</MenuItem>
              <MenuItem value={2}>$0-$49,999</MenuItem>
            <MenuItem value={5}>$50,000-$99,999</MenuItem>
            <MenuItem value={4}>$150,000-$199,999</MenuItem>
            <MenuItem value={3}>$100,000-$149,999</MenuItem>
            <MenuItem value={6}>More Than $200,000</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="incomeSource" shrink={true}>Primary income source</InputLabel>
          <Select
            value={this.state.incomeSource}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'incomeSource',
              id: 'incomeSource',
            }}>
              <MenuItem value={2}>Government benefits/Pensions</MenuItem>
              <MenuItem value={3}>Gross Wages and Salary</MenuItem>
              <MenuItem value={10}>Unknown</MenuItem>
              <MenuItem value={8}>Self Employment</MenuItem>
              <MenuItem value={0}>Business earnings</MenuItem>
              <MenuItem value={7}>Other</MenuItem>
              <MenuItem value={9}>Superannuation</MenuItem>
              <MenuItem value={4}>Income from Investments</MenuItem>
              <MenuItem value={1}>Deceased Estate or Trusts</MenuItem>
              <MenuItem value={6}>Lump Sum termination payments</MenuItem>
              <MenuItem value={5}>Income from reverse mortgage</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="unsecuredDebts" shrink={true}>Unsecured debts</InputLabel>
          <Select
            value={this.state.unsecuredDebts}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'unsecuredDebts',
              id: 'unsecuredDebts',
            }}>
            <MenuItem value={0}>$0-$49,999</MenuItem>
            <MenuItem value={9}>$50,000-$99,999</MenuItem>
            <MenuItem value={1}>$100000-$14999</MenuItem>
            <MenuItem value={10}>$500,000-$549,999</MenuItem>
            <MenuItem value={12}>$600,000-$649,999</MenuItem>
            <MenuItem value={3}>$200,000-$249,999</MenuItem>
            <MenuItem value={8}>$450,000-$499,999</MenuItem>
            <MenuItem value={6}>$350,000-$399,999</MenuItem>
            <MenuItem value={2}>$150,000-$199,999</MenuItem>
            <MenuItem value={15}>$750,000-$799,999</MenuItem>
            <MenuItem value={5}>$300,000-$349,999</MenuItem>
            <MenuItem value={4}>$250,000-$299,999</MenuItem>
            <MenuItem value={7}>$400,000-$449,999</MenuItem>
            <MenuItem value={14}>$700,000-$749,999</MenuItem>
            <MenuItem value={13}>$650,000-$699,999</MenuItem>
            <MenuItem value={18}>$900,000-$949,999</MenuItem>
            <MenuItem value={16}>$800,000-$849,999</MenuItem>
            <MenuItem value={17}>$850,000-$899,999</MenuItem>
            <MenuItem value={19}>$950,000-$999,999</MenuItem>
            <MenuItem value={11}>$550,000-$599,999</MenuItem>
            <MenuItem value={20}>More Than $1,000,000</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={'form-control'} fullWidth={true}>
          <InputLabel htmlFor="assets" shrink={true}>Assets</InputLabel>
          <Select
            value={this.state.assets}
            onChange={this.handleChange}
            fullWidth={true}
            inputProps={{
              name: 'assets',
              id: 'assets',
            }}>
              <MenuItem value={0}>$0-$49,999</MenuItem>
              <MenuItem value={9}>$50,000-$99,999</MenuItem>
              <MenuItem value={1}>$100000-$14999</MenuItem>
              <MenuItem value={2}>$150,000-$199,999</MenuItem>
              <MenuItem value={3}>$200,000-$249,999</MenuItem>
              <MenuItem value={4}>$250,000-$299,999</MenuItem>
              <MenuItem value={5}>$300,000-$349,999</MenuItem>
              <MenuItem value={6}>$350,000-$399,999</MenuItem>
              <MenuItem value={7}>$400,000-$449,999</MenuItem>
              <MenuItem value={8}>$450,000-$499,999</MenuItem>
              <MenuItem value={10}>$500,000-$549,999</MenuItem>
              <MenuItem value={11}>$550,000-$599,999</MenuItem>
              <MenuItem value={12}>$600,000-$649,999</MenuItem>
              <MenuItem value={13}>$650,000-$699,999</MenuItem>
              <MenuItem value={14}>$700,000-$749,999</MenuItem>
              <MenuItem value={15}>$750,000-$799,999</MenuItem>
              <MenuItem value={16}>$800,000-$849,999</MenuItem>
              <MenuItem value={17}>$850,000-$899,999</MenuItem>
              <MenuItem value={18}>$900,000-$949,999</MenuItem>
              <MenuItem value={19}>$950,000-$999,999</MenuItem>
              <MenuItem value={20}>More Than $1,000,000</MenuItem>
          </Select>
        </FormControl>

      </form>
    )
  }

}
