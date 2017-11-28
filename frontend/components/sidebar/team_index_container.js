import { connect } from 'react-redux';
import { 
  createTeam, 
  getTeamsIndex, 
  updateTeam, 
  deleteTeam,
  joinTeam,
  leaveTeam 
} from '../../actions/teams';
import TeamIndex from './team_index';

const mapStateToProps = state => ({
  teams: state.entities.teams,
  team_keys: state.session.currentUser.teams
});

const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
  getTeamsIndex: () => dispatch(getTeamsIndex()),
  updateTeam: team => dispatch(updateTeam(team)),
  deleteTeam: teamId => dispatch(deleteTeam(teamId)),
  joinTeam: teamId => dispatch(joinTeam(teamId)),
  leaveTeam: teamId => dispatch(leaveTeam(teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);