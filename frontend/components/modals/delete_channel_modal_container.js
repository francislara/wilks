import { connect } from 'react-redux';
import { deleteChannel } from '../../actions/channels';
import DeleteChannelModal from './delete_channel_modal';

const mapStateToProps = (state, ownProps) => ({
  channels: state.entities.channels

});

const mapDispatchToProps = dispatch => ({
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteChannelModal);