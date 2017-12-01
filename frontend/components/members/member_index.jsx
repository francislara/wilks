
import React from 'react';
import ScrollArea from 'react-scrollbar';

class MemberIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    

  }

  render() {
    let teamId = this.props.match.params.teamId;
    let currentTeam = this.props.teams[teamId];
    let members;
    if(currentTeam) {
      members = currentTeam.members;
    } else {
      members = [];
    }

    

    return (
      <div className="member-container"> 
        <h2>Members</h2>
        {
          members.map(key => {
            let user = this.props.users[key];
            let name = user.username;

            return (
              <div>{name}</div>
            );
          })
        }

      
      </div>
    );
  }
}

export default MemberIndex;