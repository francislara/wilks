import { connect } from 'react-redux';
import { 
  getTeamsIndex, 
  updateTeam, 
  deleteTeam,
  leaveTeam 
} from '../../actions/teams';
import TeamIndex from './team_index';

const mapStateToProps = state => ({
  teams: state.entities.teams,
  team_keys: state.session.currentUser.teams
});

const mapDispatchToProps = dispatch => ({
  getTeamsIndex: () => dispatch(getTeamsIndex()),
  updateTeam: team => dispatch(updateTeam(team)),
  deleteTeam: teamId => dispatch(deleteTeam(teamId)),
  leaveTeam: teamId => dispatch(leaveTeam(teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);