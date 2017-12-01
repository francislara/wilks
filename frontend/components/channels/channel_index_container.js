import { connect } from 'react-redux';
import { getChannelsIndex, deleteChannel } from '../../actions/channels';
import ChannelIndex from './channel_index';

const mapStateToProps = state => ({
  channels: state.entities.channels,
  teams: state.entities.teams,
  user_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  getChannelsIndex: () => dispatch(getChannelsIndex()),
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);