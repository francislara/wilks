import React from 'react';
import Modal from 'react-modal';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      teams: this.props.teams,
      team_keys: this.props.team_keys
    };

  }

  componentWillMount() {
    this.props.getTeamsIndex();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teams !== this.teams) {
      this.setState({
        teams: nextProps.teams
      });
    }
  }

  render() {
    // console.log(this.state.teams);
    return (
      <div className="sidebar-scroller">
        <div className="friends-button">
          <i className="fa fa-users" aria-hidden="true"></i>
        </div>
        <div className="team-separator"></div>
        {
          this.state.team_keys.map(key => {
            if(this.state.teams[key]){
              return (
                <TeamIndexItem key={key} keys={key} team={this.state.teams[key]} />
              );    
            }
          })
        }
        <div className="new-team-modal">
          <p>+</p>
        </div>
        <div className="team-separator"></div>
      </div>
    );
  }
}

export default TeamIndex;