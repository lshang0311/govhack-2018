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
        <div>
          <TextField
            id="postcode"
            name="postcode"
            label="Postcode"
            value={this.state.postcode}
            onChange={this.handleChange}
            fullWidth={false}
            maxLength={4}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              maxLength: 4
            }}
          />
        </div>
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
            <MenuItem value={'Other Technicians and Trades Workers'}>Other Technicians and Trades Workers</MenuItem>
            <MenuItem value={'Farm, Forestry and Garden Workers'}>Farm, Forestry and Garden Workers</MenuItem>
            <MenuItem value={'Chief Executives, General Managers and Legislators'}>Chief Executives, General Managers
              and
              Legislators</MenuItem>
            <MenuItem value={'AFSA'}>AFSA</MenuItem>
            <MenuItem value={'Business, Human Resource and Marketing Professionals'}>Business, Human Resource and
              Marketing Professionals</MenuItem>
            <MenuItem value={'Skilled Animal and Horticultural Workers'}>Skilled Animal and Horticultural
              Workers</MenuItem>
            <MenuItem value={'Other Clerical and Administrative Workers'}>Other Clerical and Administrative
              Workers</MenuItem>
            <MenuItem value={'Hospitality Workers'}>Hospitality Workers</MenuItem>
            <MenuItem value={'Hospitality, Retail and Service Managers'}>Hospitality, Retail and Service
              Managers</MenuItem>
            <MenuItem value={'Sports and Personal Service Workers'}>Sports and Personal Service Workers</MenuItem>
            <MenuItem value={'Construction Trades Workers'}>Construction Trades Workers</MenuItem>
            <MenuItem value={'Other Labourers'}>Other Labourers</MenuItem>
            <MenuItem value={'Road and Rail Drivers'}>Road and Rail Drivers</MenuItem>
            <MenuItem value={'Numerical Clerks'}>Numerical Clerks</MenuItem>
            <MenuItem value={'Food Trades Workers'}>Food Trades Workers</MenuItem>
            <MenuItem value={'Protective Service Workers'}>Protective Service Workers</MenuItem>
            <MenuItem value={'Food Preparation Assistants'}>Food Preparation Assistants</MenuItem>
            <MenuItem value={'Sales Representatives and Agents'}>Sales Representatives and Agents</MenuItem>
            <MenuItem value={'Engineering, ICT and Science Technicians'}>Engineering, ICT and Science
              Technicians</MenuItem>
            <MenuItem value={'ICT Professionals'}>ICT Professionals</MenuItem>
            <MenuItem value={'Sales Assistants and Salespersons'}>Sales Assistants and Salespersons</MenuItem>
            <MenuItem value={'Design, Engineering, Science and Transport Professionals'}>Design, Engineering, Science
              and
              Transport Professionals</MenuItem>
            <MenuItem value={'Carers and Aides'}>Carers and Aides</MenuItem>
            <MenuItem value={'Cleaners and Laundry Workers'}>Cleaners and Laundry Workers</MenuItem>
            <MenuItem value={'Automotive and Engineering Trades Workers'}>Automotive and Engineering Trades
              Workers</MenuItem>
            <MenuItem value={'Specialist Managers'}>Specialist Managers</MenuItem>
            <MenuItem value={'Office Managers and Program Administrators'}>Office Managers and Program
              Administrators</MenuItem>
            <MenuItem value={'Machine and Stationary Plant Operators'}>Machine and Stationary Plant Operators</MenuItem>
            <MenuItem value={'Legal, Social and Welfare Professionals'}>Legal, Social and Welfare
              Professionals</MenuItem>
            <MenuItem value={'Electrotechnology and Telecommunications Trades Workers'}>Electrotechnology and
              Telecommunications Trades Workers</MenuItem>
            <MenuItem value={'Clerical and Office Support Workers'}>Clerical and Office Support Workers</MenuItem>
            <MenuItem value={'Health Professionals'}>Health Professionals</MenuItem>
            <MenuItem value={'Mobile Plant Operators'}>Mobile Plant Operators</MenuItem>
            <MenuItem value={'Factory Process Workers'}>Factory Process Workers</MenuItem>
            <MenuItem value={'Sales Support Workers'}>Sales Support Workers</MenuItem>
            <MenuItem value={'Construction and Mining Labourers'}>Construction and Mining Labourers</MenuItem>
            <MenuItem value={'Health and Welfare Support Workers'}>Health and Welfare Support Workers</MenuItem>
            <MenuItem value={'Education Professionals'}>Education Professionals</MenuItem>
            <MenuItem value={'General Clerical Workers'}>General Clerical Workers</MenuItem>
            <MenuItem value={'Personal Assistants and Secretaries'}>Personal Assistants and Secretaries</MenuItem>
            <MenuItem value={'Arts and Media Professionals'}>Arts and Media Professionals</MenuItem>
            <MenuItem value={'Storepersons'}>Storepersons</MenuItem>
            <MenuItem value={'Inquiry Clerks and Receptionists'}>Inquiry Clerks and Receptionists</MenuItem>
            <MenuItem value={'Farmers and Farm Managers'}>Farmers and Farm Managers</MenuItem>
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
            <MenuItem value={'$0-$49999'}>$0-$49,999</MenuItem>
            <MenuItem value={'$50000-$99999'}>$50,000-$99,999</MenuItem>
            <MenuItem value={'$150000-$199999'}>$150,000-$199,999</MenuItem>
            <MenuItem value={'$100000-$149999'}>$100,000-$149,999</MenuItem>
            <MenuItem value={'More Than $200000'}>More Than $200,000</MenuItem>
            <MenuItem value={'$-100000-$-50001'}>$-100,000-$-50,001</MenuItem>
            <MenuItem value={'$-50000-$-1'}>$-50,000-$-1</MenuItem>
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
            <MenuItem value={'Government benefits/Pensions'}>Government benefits/Pensions</MenuItem>
            <MenuItem value={'Gross Wages and Salary'}>Gross Wages and Salary</MenuItem>
            <MenuItem value={'Unknown'}>Unknown</MenuItem>
            <MenuItem value={'Self Employment'}>Self Employment</MenuItem>
            <MenuItem value={'Business earnings'}>Business earnings</MenuItem>
            <MenuItem value={'Other'}>Other</MenuItem>
            <MenuItem value={'Superannuation'}>Superannuation</MenuItem>
            <MenuItem value={'Income from Investments'}>Income from Investments</MenuItem>
            <MenuItem value={'Deceased Estate or Trusts'}>Deceased Estate or Trusts</MenuItem>
            <MenuItem value={'Lump Sum termination payments'}>Lump Sum termination payments</MenuItem>
            <MenuItem value={'Income from reverse mortgage'}>Income from reverse mortgage</MenuItem>
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
            <MenuItem value={'$0-$49999'}>$0-$49,999</MenuItem>
            <MenuItem value={'$50000-$99999'}>$50,000-$99,999</MenuItem>
            <MenuItem value={'$500000-$549999'}>$500,000-$549,999</MenuItem>
            <MenuItem value={'$600000-$649999'}>$600,000-$649,999</MenuItem>
            <MenuItem value={'$100000-$149999'}>$100,000-$149,999</MenuItem>
            <MenuItem value={'$200000-$249999'}>$200,000-$249,999</MenuItem>
            <MenuItem value={'$450000-$499999'}>$450,000-$499,999</MenuItem>
            <MenuItem value={'$350000-$399999'}>$350,000-$399,999</MenuItem>
            <MenuItem value={'$150000-$199999'}>$150,000-$199,999</MenuItem>
            <MenuItem value={'$750000-$799999'}>$750,000-$799,999</MenuItem>
            <MenuItem value={'$300000-$349999'}>$300,000-$349,999</MenuItem>
            <MenuItem value={'$250000-$299999'}>$250,000-$299,999</MenuItem>
            <MenuItem value={'$400000-$449999'}>$400,000-$449,999</MenuItem>
            <MenuItem value={'$700000-$749999'}>$700,000-$749,999</MenuItem>
            <MenuItem value={'$650000-$699999'}>$650,000-$699,999</MenuItem>
            <MenuItem value={'$900000-$949999'}>$900,000-$949,999</MenuItem>
            <MenuItem value={'$800000-$849999'}>$800,000-$849,999</MenuItem>
            <MenuItem value={'$850000-$899999'}>$850,000-$899,999</MenuItem>
            <MenuItem value={'$950000-$999999'}>$950,000-$999,999</MenuItem>
            <MenuItem value={'$550000-$599999'}>$550,000-$599,999</MenuItem>
            <MenuItem value={'More Than $1000000'}>More Than $1,000,000</MenuItem>
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
            <MenuItem value={'$0-$49999'}>$0-$49,999</MenuItem>
            <MenuItem value={'$50000-$99999'}>$50,000-$99,999</MenuItem>
            <MenuItem value={'$100000-$149999'}>$100,000-$149,999</MenuItem>
            <MenuItem value={'$150000-$199999'}>$150,000-$199,999</MenuItem>
            <MenuItem value={'$200000-$249999'}>$200,000-$249,999</MenuItem>
            <MenuItem value={'$250000-$299999'}>$250,000-$299,999</MenuItem>
            <MenuItem value={'$300000-$349999'}>$300,000-$349,999</MenuItem>
            <MenuItem value={'$350000-$399999'}>$350,000-$399,999</MenuItem>
            <MenuItem value={'$400000-$449999'}>$400,000-$449,999</MenuItem>
            <MenuItem value={'$450000-$499999'}>$450,000-$499,999</MenuItem>
            <MenuItem value={'$500000-$549999'}>$500,000-$549,999</MenuItem>
            <MenuItem value={'$550000-$599999'}>$550,000-$599,999</MenuItem>
            <MenuItem value={'$600000-$649999'}>$600,000-$649,999</MenuItem>
            <MenuItem value={'$650000-$699999'}>$650,000-$699,999</MenuItem>
            <MenuItem value={'$700000-$749999'}>$700,000-$749,999</MenuItem>
            <MenuItem value={'$750000-$799999'}>$750,000-$799,999</MenuItem>
            <MenuItem value={'$800000-$849999'}>$800,000-$849,999</MenuItem>
            <MenuItem value={'$850000-$899999'}>$850,000-$899,999</MenuItem>
            <MenuItem value={'$900000-$949999'}>$900,000-$949,999</MenuItem>
            <MenuItem value={'$950000-$999999'}>$950,000-$999,999</MenuItem>
            <MenuItem value={'More Than $1000000'}>More Than $1,000,000</MenuItem>
          </Select>
        </FormControl>

      </form>
    )
  }

}
