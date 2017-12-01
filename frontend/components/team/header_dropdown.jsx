import React from 'react';
import Modal from 'react-modal';
import LeaveTeamModalContainer from '../modals/leave_team_modal_container';
import CreateChannelModalContainer from '../modals/create_channel_modal_container';
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
      modalLeaveOpen: false,
      modalCreateOpen: false
    };


    this.handleLeave = this.handleLeave.bind(this);
    this.openLeaveModal = this.openLeaveModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
  }

  // removeDropdown() {
  //   $('.header-dropdown').addClass('reallyhidden');
  //   $('.header-dropdown').addClass('hidden');
  // } 

  // handleClickOutside() {
  //   this.props.removeDropdown();
  // }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveTeam(this.props.teamId);
  }

  openLeaveModal() {
    this.setState({
      modalLeaveOpen: true,
      modalCreateOpen: false
    });
    this.props.toggleDropdown();
  }

  openCreateModal() {
    this.setState({
      modalCreateOpen: true,
      modalLeaveOpen: false,
    });
    this.props.toggleDropdown();
  }

  closeModal() {
    this.setState({
      modalLeaveOpen: false,
      modalCreateOpen: false
    });
  }

  render() {
    return (
      <div className="dropdown-container">
        <div id="header-dropdown" className="header-dropdown hidden">
          <p className="team-id"><i className="fa fa-id-card" aria-hidden="true"></i> Team ID: {this.props.teamId}</p>
          <p className="dropdown-separator"> </p>
          <p 
            className="create-channel-button"
            onClick={this.openCreateModal}>
            <i className="fa fa-plus-square" aria-hidden="true"></i> Create Channel</p>
          <p className="dropdown-separator"> </p>
          <p 
            className="leave-team-button"
            onClick={this.openLeaveModal}
            >
            <i className="fa fa-sign-out" aria-hidden="true"></i> Leave Team</p>
        </div>
        <Modal
          isOpen={this.state.modalLeaveOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <LeaveTeamModalContainer 
            closeModal={this.closeModal}
            teamId={this.props.teamId}
            toggleDropdown={this.props.toggleDropdown} />
        </Modal>

        <Modal
          isOpen={this.state.modalCreateOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <CreateChannelModalContainer
            closeModal={this.closeModal}
            teamId={this.props.teamId}
            toggleDropdown={this.props.toggleDropdown} />
        </Modal>
      </div>
    );
  }
}

export default HeaderDropdown;