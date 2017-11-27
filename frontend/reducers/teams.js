import merge from 'lodash/merge';
import {
  RECEIVE_TEAM,
  RECEIVE_ALL_TEAMS,
  REMOVE_TEAM
} from '../actions/teams';

const _defaultState = {};

const teamsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAM:
      return merge({}, state, action.team);
    case RECEIVE_ALL_TEAMS:
      return action.teams;
    case REMOVE_TEAM:
      let newState = merge({}, state);
      let key = Object.keys(action.team)[0];
      delete newState[key];
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;