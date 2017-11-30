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
      <div className="leaveTeamModal">
        <h2>Leave '{this.teamName}' ?</h2>
        <p>Are you sure you want to leave <strong>{this.teamName}</strong></p>
        <p>Cancel</p> 
        <Link to='@me'>
          <button onClick={this.handleLeave}>Leave Team</button>
        </Link>
      </div>
    );
  }

}

export default LeaveTeamModal;