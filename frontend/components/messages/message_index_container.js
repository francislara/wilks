import { connect } from 'react-redux';
import { createMessage, getMessageIndex } from '../../actions/channels';
import MessageIndex from './message_index';

const mapStateToProps = state => ({
  channels: state.entities.channels

});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  getMessageIndex: () => dispatch(getMessageIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);