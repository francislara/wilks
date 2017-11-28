import React from 'react';
import Modal from 'react-modal';
import TeamIndexItem from './team_index_item';
import TeamModalContainer from '../modals/team_modal_container';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
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

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainModalOpen: false,
      createModalOpen: false,
      joinModalOpen: false,
      teams: this.props.teams,
      team_keys: this.props.team_keys
      
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openMainModal() {
    this.setState({
      mainModalOpen: true,
      createModalOpen: false,
      joinModalOpen: false
    });
  }

  openCreateModal() {
    this.setState({
      createModalOpen: true,
      mainModalOpen: false,
      joinModalOpen: false
    });
  }

  openJoinModal() {
    this.setState({
      joinModalOpen: true,
      createModalOpen: false,
      mainModalOpen: false
    });
  }

  closeModal() {
    this.setState({
      mainModalOpen: false,
      createModalOpen: false,
      joinModalOpen: false
    });
  }

  render() {
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
                <TeamIndexItem 
                  key={key} 
                  keys={key} 
                  team={this.state.teams[key]} />
              );    
            }
          })
        }
        <div className="new-team-modal" onClick={this.openMainModal}>
          <p>+</p>
        </div>
        <div className="team-separator"></div>

        <Modal
          isOpen={this.state.mainModalOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <TeamModalContainer closeModal={this.closeModal} />
        </Modal>

        <Modal
          isOpen={this.state.createModalOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <TeamModalContainer closeModal={this.closeModal} />
        </Modal>

        <Modal
          isOpen={this.state.joinModalOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <TeamModalContainer closeModal={this.closeModal} />
        </Modal>


      </div>
    );
  }
}

export default TeamIndex;