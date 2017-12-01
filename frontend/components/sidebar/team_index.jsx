import React from 'react';
import Modal from 'react-modal';
import TeamIndexItem from './team_index_item';
import TeamModal from '../modals/team_modal';
import CreateModalContainer from '../modals/create_modal_container';
import JoinModalContainer from '../modals/join_modal_container';
import ScrollArea from 'react-scrollbar';
import { NavLink, Redirect } from 'react-router-dom';

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

const scrollBarStyle = {
  width: 0
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


    this.openMainModal = this.openMainModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openJoinModal = this.openJoinModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.getTeamsIndex();
    this.props.getUserIndex();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teams !== this.props.teams) {
      this.setState({
        teams: nextProps.teams,
        team_keys: nextProps.team_keys
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
      
      <ScrollArea
        speed={0.8}
        horizontal={false}
        verticalContainerStyle={scrollBarStyle}
        verticalScrollbarStyle={scrollBarStyle}
        >
        <NavLink to='/teams/@me'>
          <div className="friends-button">
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
        </NavLink>
        <div className="team-separator"></div>
        {
          this.state.team_keys.map(key => {
            
            if(this.state.teams[key]){
              let defaultChannel = this.props.teams[key].channels[0];
              return (
                <div key={key} className="team-navlink">
                  <div id={`blocker-${key}`}className='blocker hidden'></div>
                  <NavLink to={`/teams/${key}`}>
                    <TeamIndexItem
                      keys={key} 
                      team={this.state.teams[key]} />
                  </NavLink>
                </div>
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
          <TeamModal 
            closeModal={this.closeModal}
            openCreateModal={this.openCreateModal}
            openJoinModal={this.openJoinModal} />
        </Modal>

        <Modal
          isOpen={this.state.createModalOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <CreateModalContainer 
            closeModal={this.closeModal}
            openMainModal={this.openMainModal} />
        </Modal>

        <Modal
          isOpen={this.state.joinModalOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <JoinModalContainer 
            closeModal={this.closeModal}
            openMainModal={this.openMainModal} />
        </Modal>
          
        
    </ScrollArea>
    

     </div>
    );
  }
}

export default TeamIndex;