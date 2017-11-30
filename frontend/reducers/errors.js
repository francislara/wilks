import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import teamErrorsReducer from './team_errors';
import channelErrorsReducer from './channel_errors';

export default combineReducers({
  session: sessionErrorsReducer,
  team: teamErrorsReducer,
  channel: channelErrorsReducer
});