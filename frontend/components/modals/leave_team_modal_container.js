import { connect } from 'react-redux';
import { leaveTeam } from '../../actions/teams';
import LeaveTeamModal from './leave_team_modal';

const mapStateToProps = (state, ownProps) => ({
  team_keys: state.session.currentUser.teams,
  teams: state.entities.teams
});

const mapDispatchToProps = dispatch => ({
  leaveTeam: teamId => dispatch(leaveTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveTeamModal);