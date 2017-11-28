import { connect } from 'react-redux';
import { joinTeam } from '../../actions/teams';
import JoinModal from './join_modal';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = dispatch => ({
  joinTeam: teamId => dispatch(joinTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinModal);