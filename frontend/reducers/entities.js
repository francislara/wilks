import { combineReducers } from 'redux';
import teamsReducer from './teams';
import channelsReducer from './channels';

export default combineReducers({
  teams: teamsReducer,
  channels: channelsReducer
});
