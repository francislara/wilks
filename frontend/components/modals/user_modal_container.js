import { connect } from 'react-redux';
import { logout, updateUser } from '../../actions/session';
import UserModal from './user_modal';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  logout: formUser => dispatch(logout(formUser)),
  updateUser: formUser => dispatch(updateUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);