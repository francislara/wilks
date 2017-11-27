import merge from 'lodash/merge';
import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from '../actions/session';
import { RECEIVE_TEAM, REMOVE_TEAM } from '../actions/teams';
import { log } from 'util';


const _nullSession = {
  currentUser: null
};

const sessionReducer =  (state = _nullSession, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_TEAM:
      newState = merge({}, state);
      newState.currentUser.teams.push(parseInt(Object.keys(action.team)[0]));
      return newState;
    case REMOVE_TEAM:
      newState = merge({}, state);
      let id = parseInt(Object.keys(action.team)[0]);
      let idx = newState.currentUser.teams.indexOf(id);
      newState.currentUser.teams.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;