import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => {
  let teams;
  if (state.entities.teams) {
    teams = state.entities.teams;
  } else {
    teams = {};
  }
  return (
    {
      teams: teams,
      team_keys: state.session.currentUser.teams
    }
  );
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);