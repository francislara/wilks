import { combineReducers } from 'redux';
import teamsReducer from './teams';

export default combineReducers({
  teams: teamsReducer
});
