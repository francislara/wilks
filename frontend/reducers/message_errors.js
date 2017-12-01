import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS,
} from '../actions/messages';


const _nullSession = [];

const messageErrorsReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return _nullSession;
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default messageErrorsReducer;