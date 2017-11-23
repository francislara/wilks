import React from 'react';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/register" component={RegisterContainer} />
    <Route path="/login" component={LoginContainer} />
  </div>
);

export default App;