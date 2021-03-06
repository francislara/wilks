import { connect } from 'react-redux';
import { 
  getTeamsIndex, 
  // updateTeam, 
  // deleteTeam,
  // leaveTeam,
  // createTeam,
  // joinTeam 
} from '../../actions/teams';
import { getChannelsIndex } from '../../actions/channels';
import { getUserIndex } from '../../actions/session';
import TeamIndex from './team_index';

const mapStateToProps = state => ({
  teams: state.entities.teams,
  team_keys: state.session.currentUser.teams
});

const mapDispatchToProps = dispatch => ({
  getTeamsIndex: () => dispatch(getTeamsIndex()),
  getChannelsIndex: () => dispatch(getChannelsIndex()),
  getUserIndex: () => dispatch(getUserIndex())
  // updateTeam: team => dispatch(updateTeam(team)),
  // deleteTeam: teamId => dispatch(deleteTeam(teamId)),
  // leaveTeam: teamId => dispatch(leaveTeam(teamId)),
  // createTeam: team => dispatch(createTeam(team)),
  // joinTeam: teamId => dispatch(joinTeam(teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);