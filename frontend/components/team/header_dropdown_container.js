import { connect } from 'react-redux';
// import { leaveTeam } from '../../actions/teams';
import { createChannel } from '../../actions/channels';
import HeaderDropdown from './header_dropdown';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);