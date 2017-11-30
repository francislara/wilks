import { connect } from 'react-redux';
import { register, login, clearSessionErrors } from '../../actions/session';
import Register from './register';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  register: formUser => dispatch(register(formUser)),
  login: formUser => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);