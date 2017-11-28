import React from 'react';

class TeamModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-modal-container">
        <h2>Teamwork makes the dream work</h2>
        <div className="team-modal-create">
          <h3>Create</h3>
          <p>Create a new team and invite your friends! It's free!</p>
          <button onClick={this.props.openCreateModal}>Create a Team</button>
        </div>

        <div className="team-modal-join">
          <h3>Join</h3>
          <p>Enter a team ID and join your friend's team!</p>
          <button onClick={this.props.openJoinModal}>Join a Team</button>
        </div>
      </div>
    );
  }
}

export default TeamModal;