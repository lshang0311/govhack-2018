import React from 'react'
import Chip from '@material-ui/core/Chip'
import './ChipsSearchBar.css'
import Autosuggest from 'react-autosuggest'

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  // Sex
  {
    id: 0,
    name: 'Female',
    group: 'sex',
    value: 0
  },
  {
    id: 1,
    name: 'Male',
    group: 'sex',
    value: 1
  },
  {
    id: 2,
    name: 'Not Stated',
    group: 'sex',
    value: 2
  },
  {
    id: 3,
    name: 'Sex Unknown',
    group: 'sex',
    value: 3
  },
  // Family Situation
  {
    id: 4,
    name: 'Couple with Dependants',
    group: 'familySituation',
    value: 0
  },
  {
    id: 5,
    name: 'Couple without Dependants',
    group: 'familySituation',
    value: 1
  },
  {
    id: 6,
    name: 'Not Stated',
    group: 'familySituation',
    value: 2
  },
  {
    id: 7,
    name: 'Single with Dependants',
    group: 'familySituation',
    value: 3
  },
  {
    id: 8,
    name: 'Single without Dependants',
    group: 'familySituation',
    value: 4
  },
  {
    id: 9,
    name: 'Family Unknown',
    group: 'familySituation',
    value: 5
  },
  // State
  {
    id: 10,
    name: 'Australian Capital Territory',
    group: 'state',
    value: 0
  },
  {
    id: 11,
    name: 'International',
    group: 'state',
    value: 1
  },
  {
    id: 12,
    name: 'New South Wales',
    group: 'state',
    value: 2
  },
  {
    id: 13,
    name: 'Northern Territory',
    group: 'state',
    value: 3
  },
  {
    id: 14,
    name: 'Queensland',
    group: 'state',
    value: 4
  },
  {
    id: 15,
    name: 'South Australia',
    group: 'state',
    value: 5
  },
  {
    id: 16,
    name: 'Tasmania',
    group: 'state',
    value: 6
  },
  {
    id: 17,
    name: 'State Unknown',
    group: 'state',
    value: 7
  },
  {
    id: 18,
    name: 'Victoria',
    group: 'state',
    value: 8
  },
  {
    id: 19,
    name: 'Western Australia',
    group: 'state',
    value: 9
  }
]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  )
}

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
)

export default class GovPage extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      chipData: [],
      value: '',
      suggestions: []
    }
  }

  handleDelete = (data) => {
    this.setState(state => {
      const chipData = [...state.chipData]
      const chipToDelete = chipData.indexOf(data)
      chipData.splice(chipToDelete, 1)
      return {chipData}
    })
  }

  onChange = (event, {newValue}) => {
    this.setState({
      value: newValue
    })
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion) => {
    this.setState(state => {
      const chipData = [...state.chipData]
      chipData.push({
        name: suggestion.name,
        group: suggestion.group,
        value: suggestion.value
      })
      return {chipData}
    })
    return ''
  }

  render () {
    const data = this.state.chipData.map(data => {
      const keys = Object.keys(data)
      const key = keys[0]
      return (
        <Chip
          key={key}
          label={data[key]}
          onDelete={this.handleDelete}
          variant={'outlined'}
        />
      )

    })

    const {value, suggestions} = this.state
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Add a field',
      value,
      onChange: this.onChange
    }

    return (
      <div className={'chip-container'}>
        <div className={'chip-container__label'}>Show risk assessment where:</div>
        <div className={'chip'}>
          {data}
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </div>
      </div>
    )
  }
}
