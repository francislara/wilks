import merge from 'lodash/merge';
import {
  RECEIVE_MESSAGE,
  RECEIVE_ALL_MESSAGES
} from '../actions/messages';

const _defaultState = {};

const messagesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, action.message);
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;