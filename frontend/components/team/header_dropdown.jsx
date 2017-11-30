import React from 'react';
import Modal from 'react-modal';
import LeaveTeamModalContainer from '../modals/leave_team_modal_container';
// import enhanceWithClickOutside from 'react-click-outside';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '4'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2f3136',
    border: 0
  }
};

class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };


    this.handleLeave = this.handleLeave.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // removeDropdown() {
  //   $('.header-dropdown').addClass('hidden');
  // } 

  // handleClickOutside() {
  //   this.removeDropdown();
  // }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveTeam(this.props.teamId);
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <div id="header-dropdown" className="header-dropdown hidden">
          <p className="team-id"><i className="fa fa-id-card" aria-hidden="true"></i> Team ID: {this.props.teamId}</p>
          <p className="dropdown-separator"> </p>
          <p 
            className="leave-team-button"
            onClick={this.openModal}
            >
            <i className="fa fa-sign-out" aria-hidden="true"></i> Leave Team</p>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <LeaveTeamModalContainer 
            closeModal={this.closeModal}
            teamId={this.props.teamId} />
        </Modal>
      </div>
    );
  }
}

export default HeaderDropdown;