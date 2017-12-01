import { connect } from 'react-redux';
import { createChannel } from '../../actions/channels';
import CreateChannelModal from './create_channel_modal';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelModal);