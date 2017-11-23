import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TESTING ONLY REMOVE WHEN DONE
import { register, login, logout } from './actions/session';
//TESTING ONLY REMOVE WHEN DONE

document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  //TESTING ONLY REMOVE WHEN DONE
  window.register = register;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING ONLY REMOVE WHEN DONE
  
  ReactDOM.render(<Root store={store} />, root);
});
