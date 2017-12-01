import React from 'react';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import NavContainer from './navbar/nav_container';
import TeamIndexContainer from './sidebar/team_index_container';
import HeaderContainer from './team/header_container';
import ChannelIndexContainer from './channels/channel_index_container';
import ChannelHeaderContainer from './channels/channel_header_container';
import MessageIndexContainer from './messages/message_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../utils/route_util';
import Favicon from 'react-favicon';

const App = () => (
  <div className="app-container display-flex">
    <Favicon url="https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/favicon_gkzh2k.png" />
    <Switch>
      <AuthRoute path="/register" component={RegisterContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <HomeRoute path="/" />
    </Switch>
    <ProtectedRoute path="/teams" component={TeamIndexContainer} />
    <Route path="/teams/:teamId" component={HeaderContainer}/>
    <Route exact path="/teams/:teamId/:channelId" 
      component={ChannelIndexContainer} />
    <ProtectedRoute path="/teams" component={NavContainer} />
    <Route exact path="/teams/:teamId/:channelId"
      component={ChannelHeaderContainer} />
    <Route exact path="/teams/:teamId/:channelId"
      component={MessageIndexContainer} />
  </div>
);

export default App;