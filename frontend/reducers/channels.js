import merge from 'lodash/merge';
import {
  RECEIVE_CHANNEL,
  RECEIVE_ALL_CHANNELS,
  REMOVE_CHANNEL
} from '../actions/channels';

const _defaultState = {};

const channelsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, action.channel);
    case RECEIVE_ALL_CHANNELS:
      console.log(action);
      return action.channels;
    case REMOVE_CHANNEL:
      let newState = merge({}, state);
      let key = Object.keys(action.channel)[0];
      delete newState[key];
      return newState;
    default:
      return state;
  }
};

export default channelsReducer;