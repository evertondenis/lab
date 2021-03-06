import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={App} />
  </BrowserRouter>
);

export default Routes;
