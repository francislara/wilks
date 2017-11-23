import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session';
import { log } from 'util';


const _nullSession = [];

const sessionErrorsReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullSession;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;