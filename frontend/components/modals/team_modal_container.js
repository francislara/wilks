import { connect } from 'react-redux';
import {
  createTeam,
  joinTeam,
} from '../../actions/teams';
import TeamModal from './team_modal';

const mapStateToProps = (state, ownProps) => ({
  // teams: state.entities.teams,
  // team_keys: state.session.currentUser.teams
});

const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
  joinTeam: teamId => dispatch(joinTeam(teamId))
});
export default connect(mapStateToProps, mapDispatchToProps)(TeamModal);



