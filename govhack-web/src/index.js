import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import UserPage from './component/UserPage'
import GovPage from './component/GovPage'
import GovScore from './component/GovScore'
import { path } from './paths'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faExclamationTriangle, faInfoCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import GovPageSummary from './component/GovPageSummary'
import GovExplore from './component/GovExplore'

library.add(faStroopwafel)
library.add(faExclamationTriangle)
library.add(faInfoCircle)
library.add(faCircle)

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact={true} path={path.user} component={UserPage}/>
      <Route exact={true} path={path.gov_explore} component={GovExplore}/>
      <Route exact={true} path={path.gov_cases} component={GovPageSummary}/>
      <Route exact={true} path={path.gov_predict_score} component={GovScore}/>
      <Route exact={true} path={path.gov_predict} component={GovPage}/>
      <Route exact={true} path={path.gov} component={GovPage}/>
      <Route exact={true} path={path.home} component={GovPageSummary}/>
    </Switch>
  </Router>
  , document.getElementById('root'))
registerServiceWorker()
