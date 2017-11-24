import React from 'react';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../utils/route_util';
import Favicon from 'react-favicon';

const App = () => (
  <div>
    <Favicon url="https://i.imgur.com/7kXfJ3n.png" />
    <Switch>
      <AuthRoute path="/register" component={RegisterContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <HomeRoute path="/" />
    </Switch>
  </div>
);

export default App;