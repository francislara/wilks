import { connect } from 'react-redux';
import ChannelHeader from './channel_header';

const mapStateToProps = state => ({
  channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader);