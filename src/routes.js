import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Dash from './containers/Dash';
import Auth from './containers/Auth';

const Routes = () => (
  <Router>
    <div>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Dash} />
      <Route path='/auth' component={Auth} />
    </div>
  </Router>
);

export default Routes;
