import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TESTING ONLY REMOVE WHEN DONE
import { getMessageIndex, createMessage } from './actions/messages';
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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createMessage = createMessage;
  window.getMessageIndex = getMessageIndex;
  //TESTING ONLY REMOVE WHEN DONE
  
  ReactDOM.render(<Root store={store} />, root);
});
