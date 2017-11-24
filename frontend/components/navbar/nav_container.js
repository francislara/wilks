import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Nav from './nav';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: formUser => dispatch(logout(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);