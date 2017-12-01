import React from 'react';
import { Link } from 'react-router-dom';


class LeaveTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.teamName = props.teams[props.teamId].name;

    this.handleLeave = this.handleLeave.bind(this);

    
  }

  handleLeave() {
    this.props.leaveTeam(this.props.teamId);
    this.props.closeModal();
    this.props.toggleDropdown();
  }
  
  
  render() {
    
    return (
      <div className="leave-team-modal">
        <h2>Leave '{this.teamName}'</h2>
        <p>Are you sure you want to leave <strong>{this.teamName}</strong>? You will have to enter the team's ID to join again.</p>
        <div className="leave-modal-footer">
          <p
            onClick={this.props.closeModal} 
            className="cancel-button">Cancel</p> 
          <Link to='/teams/@me'>
            <button onClick={this.handleLeave}>Leave Team</button>
          </Link>
        </div>
      </div>
    );
  }

}

export default LeaveTeamModal;