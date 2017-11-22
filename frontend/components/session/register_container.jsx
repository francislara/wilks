import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Register from './register';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Register);