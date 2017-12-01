import { RECEIVE_ALL_USERS } from '../actions/session';

const _defaultState = {};

const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;