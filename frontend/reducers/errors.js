import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import teamErrorsReducer from './team_errors';

export default combineReducers({
  session: sessionErrorsReducer,
  team: teamErrorsReducer
});