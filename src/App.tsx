import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
