import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home title="Home" />
        </Route>
        <Route path="/about" title="About">
          <About title="About" />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
