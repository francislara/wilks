import { connect } from 'react-redux';
import { createMessage, getMessageIndex } from '../../actions/channels';
import MessageIndexItem from './channel_index_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  getMessageIndex: () => dispatch(getMessageIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndexItem);