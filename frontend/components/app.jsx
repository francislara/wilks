import React from 'react';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <AuthRoute path="/register" component={RegisterContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;