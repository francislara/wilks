import { connect } from 'react-redux';
import { register } from '../../actions/session';
import Register from './register';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  register: formUser => dispatch(register(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);