import React from 'react';
import RegisterContainer from './session/register_container';
import { Route } from 'react-router-dom';

export default () => (
  <div>
    <Route path="/register" component={RegisterContainer} />
  </div>
);