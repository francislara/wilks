import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TESTING ONLY REMOVE WHEN DONE
import { 
  createChannel, 
  getChannelsIndex, 
  deleteChannel, 
} from './actions/channels';
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
  window.createChannel = createChannel;
  window.deleteChannel = deleteChannel;
  window.getChannelsIndex = getChannelsIndex;
  //TESTING ONLY REMOVE WHEN DONE
  
  ReactDOM.render(<Root store={store} />, root);
});
