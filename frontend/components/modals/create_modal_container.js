import { connect } from 'react-redux';
import { createTeam } from '../../actions/teams';
import CreateModal from './Create_modal';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);