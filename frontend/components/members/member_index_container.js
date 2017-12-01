import { connect } from 'react-redux';
import MemberIndex from './member_index';

const mapStateToProps = state => ({
  teams: state.entities.teams,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MemberIndex);