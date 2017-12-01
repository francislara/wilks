import { connect } from 'react-redux';
import { deleteChannel } from '../../actions/channels';
import ChannelIndexItem from './channel_index_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem);