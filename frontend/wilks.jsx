import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TESTING ONLY REMOVE WHEN DONE
import { 
  createTeam, 
  getTeamsIndex, 
  deleteTeam, 
  updateTeam, 
  joinTeam, 
  leaveTeam 
} from './actions/teams';
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
  window.joinTeam = joinTeam;
  window.leaveTeam = leaveTeam;
  window.createTeam = createTeam;
  window.deleteTeam = deleteTeam;
  window.getTeamsIndex = getTeamsIndex;
  window.updateTeam = updateTeam;
  //TESTING ONLY REMOVE WHEN DONE
  
  ReactDOM.render(<Root store={store} />, root);
});
