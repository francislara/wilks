import { combineReducers } from 'redux';
import teamsReducer from './teams';
import channelsReducer from './channels';
import messagesReducer from './messages';

export default combineReducers({
  teams: teamsReducer,
  channels: channelsReducer,
  messages: messagesReducer
});
