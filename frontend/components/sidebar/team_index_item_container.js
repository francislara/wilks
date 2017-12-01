import { connect } from 'react-redux';

import { getChannelsIndex } from '../../actions/channels';
import TeamIndexItem from './team_index_item';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  getChannelsIndex: () => dispatch(getChannelsIndex())
  // updateTeam: team => dispatch(updateTeam(team)),
  // deleteTeam: teamId => dispatch(deleteTeam(teamId)),
  // leaveTeam: teamId => dispatch(leaveTeam(teamId)),
  // createTeam: team => dispatch(createTeam(team)),
  // joinTeam: teamId => dispatch(joinTeam(teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndexItem);