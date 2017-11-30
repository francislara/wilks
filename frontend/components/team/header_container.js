import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
  teams: state.entities.teams
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);