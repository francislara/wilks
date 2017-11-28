import React from 'react';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import NavContainer from './navbar/nav_container';
import TeamIndexContainer from './sidebar/team_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../utils/route_util';
import Favicon from 'react-favicon';

const App = () => (
  <div className="app-container">
    <Favicon url="https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/favicon_gkzh2k.png" />
    <Switch>
      <AuthRoute path="/register" component={RegisterContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <HomeRoute path="/" />
    </Switch>
    <ProtectedRoute path="/teams" component={TeamIndexContainer} />
    <ProtectedRoute path="/teams" component={NavContainer} />
  </div>
);

export default App;