import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNEL_ERRORS
} from '../actions/channels';


const _nullSession = [];

const channelErrorsReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return _nullSession;
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default channelErrorsReducer;