import { connect } from 'react-redux';
import { createMessage, getMessageIndex } from '../../actions/messages';
import MessageIndex from './message_index';

const mapStateToProps = state => ({
  channels: state.entities.channels,
  messages: state.entities.messages,
  users: state.entities.users

});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  getMessageIndex: () => dispatch(getMessageIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);