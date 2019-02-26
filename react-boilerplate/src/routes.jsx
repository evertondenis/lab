import React from 'react';
import Router from 'react-router-dom/Router';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import history from 'core/utils/route';
import Main from 'containers/Main';
import Customers from 'containers/Customers';
import Jokes from 'containers/PollingJoke';
import NotFound from 'containers/NotFound';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Main} exact path="/" />
      <Route component={Customers} path="/customers" />
      <Route component={Jokes} path="/jokes" />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
