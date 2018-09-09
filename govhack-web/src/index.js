import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import UserPage from './component/UserPage'
import GovPage from './component/GovPage'
import GovPageSummary from './component/GovPageSummary'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/user" component={UserPage}/>
      <Route exact path="/gov" component={GovPage}/>
      <Route exact path="/gov/summary" component={GovPageSummary}/>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
  , document.getElementById('root'))
registerServiceWorker()
