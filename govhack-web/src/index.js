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

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact={true} path={path.user} component={UserPage}/>
      <Route exact={true} path={path.gov_predict_score} component={GovScore}/>
      <Route exact={true} path={path.gov_predict} component={GovPage}/>
      <Route exact={true} path={path.gov} component={GovPage}/>
      <Route exact={true} path={path.home} component={App}/>
    </Switch>
  </Router>
  , document.getElementById('root'))
registerServiceWorker()
