import merge from 'lodash/merge';
import {
  RECEIVE_TEAM,
  RECEIVE_ALL_TEAMS,
  REMOVE_TEAM
} from '../actions/teams';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channels';

const _defaultState = {};

const teamsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TEAM:
      return merge({}, state, action.team);
    case RECEIVE_ALL_TEAMS:
      return action.teams;
    case REMOVE_TEAM:
      newState = merge({}, state);
      let key = Object.keys(action.team)[0];
      delete newState[key];
      return newState;
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      newState[action.channel.team_id].channels.push(parseInt(Object.keys(action.channel)[0]));
      return newState;
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      let id = parseInt(Object.keys(action.channel)[0]);
      let idx = newState[action.channel.team_id].channels.indexOf(id);
      newState[action.channel.team_id].channels.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;