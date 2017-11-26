import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import UserModal from './user_modal';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: formUser => dispatch(logout(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);