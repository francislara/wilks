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
  let newState, channelId, teamId;
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
      channelId = parseInt(Object.keys(action.channel)[0]);
      teamId = parseInt(action.channel[channelId].team_id);
      newState[teamId].channels.push(channelId);
      return newState;
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      channelId = parseInt(Object.keys(action.channel)[0]);
      teamId = parseInt(action.channel[channelId].team_id);
      let idx = newState[teamId].channels.indexOf(channelId);
      newState[teamId].channels.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;