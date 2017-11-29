import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/teams/@me" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/register" /> 
    )}
  />
);

const Home = ({ component: Component, path, loggedIn }) => (
  <Route
    exact path={path}
    render={props => (
      loggedIn ? <Redirect to="/teams/@me" /> : <Redirect to="/login" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const HomeRoute = withRouter(connect(mapStateToProps)(Home));