import React from 'react';
import Modal from 'react-modal';
import UserModalContainer from '../modals/user_modal_container';

const customStyles = {
  overlay : {
  position          : 'fixed',
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(0, 0, 0, 0.5)'
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

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      username: this.props.user.username,
      img_url: this.props.user.img_url
    };

    // this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  // handleClick(e) {
  //   e.preventDefault();
  //   this.openModal();
  //   // this.props.logout();
  // }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
    this.props.updateUser(this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.username !== this.props.user.username) {
      this.setState({
        username: nextProps.user.username
      });
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-user">
         <img src={this.state.img_url} /> 
         <p>{this.state.username}</p>
        </div>
        <div onClick={this.openModal} className="nav-modal">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
        <Modal 
          isOpen={this.state.modalOpen} 
          style={customStyles}
          onRequestClose={this.closeModal}>
            <UserModalContainer closeModal={this.closeModal}/>
        </Modal>

      </div>
    );
  }
}

export default Nav;