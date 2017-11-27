import {
  RECEIVE_TEAM,
  RECEIVE_TEAM_ERRORS
} from '../actions/teams';


const _nullSession = [];

const teamErrorsReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      return _nullSession;
    case RECEIVE_TEAM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default teamErrorsReducer;