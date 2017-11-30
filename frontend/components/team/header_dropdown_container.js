import { connect } from 'react-redux';
import { updateTeam, leaveTeam } from '../../actions/teams';
import HeaderDropdown from './header_dropdown';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  updateTeam: team => dispatch(updateTeam(team)),
  leaveTeam: teamId => dispatch(leaveTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);