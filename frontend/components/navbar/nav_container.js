import { connect } from 'react-redux';
import { logout, updateUser } from '../../actions/session';
import Nav from './nav';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: formUser => dispatch(logout(formUser)),
  updateUser: formUser => dispatch(updateUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);