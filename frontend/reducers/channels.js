import merge from 'lodash/merge';
import {
  RECEIVE_CHANNEL,
  RECEIVE_ALL_CHANNELS,
  REMOVE_CHANNEL
} from '../actions/channels';
import { RECEIVE_MESSAGE } from '../actions/messages';

const _defaultState = {};

const channelsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, action.channel);
    case RECEIVE_ALL_CHANNELS:
      // console.log(action);
      return action.channels;
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      let key = Object.keys(action.channel)[0];
      delete newState[key];
      return newState;
    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      let messageId = parseInt(Object.keys(action.message)[0]);
      let channelId = parseInt(action.message[messageId].channel_id);
      newState[channelId].messages.push(messageId);
      return newState;
    default:
      return state;
  }
};

export default channelsReducer;