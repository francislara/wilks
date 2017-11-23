import { connect } from 'react-redux';
import { register } from '../../actions/session';
import Register from './register';

const mapDispatchToProps = dispatch => ({
  register: formUser => dispatch(register(formUser))
});

export default connect(null, mapDispatchToProps)(Register);