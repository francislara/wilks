import React from 'react';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import NavContainer from './navbar/nav_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../utils/route_util';
import Favicon from 'react-favicon';

const App = () => (
  <div>
    <Favicon url="https://res.cloudinary.com/lara-cloud1/image/upload/v1511561102/favicon_hn4h6z.png" />
    <Switch>
      <AuthRoute path="/register" component={RegisterContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/servers" component={NavContainer} />
      <HomeRoute path="/" />
    </Switch>
  </div>
);

export default App;